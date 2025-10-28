// --- CAROUSEL CONTROL VARIABLES ---
let slideIndex = 1; 
const autoSlideInterval = 5000; 
let slideTimeout; 
const initialSlides = document.getElementsByClassName("mySlides");
const initialDots = document.getElementsByClassName("dot");

// --- API/TABLE VARIABLES ---
const UPCOMING_API_QUERY_URL = 'https://api.spacexdata.com/v5/launches/query';
const UPCOMING_TABLE_BODY_ID = 'launch-data-body';

// --- ONGOING MISSIONS DATA (HARDCODED) ---
const ONGOING_MISSIONS_DATA = [
    {
        name: "CRS-33 MISSION",
        launchTime: new Date("2025-08-15T00:00:00Z").getTime(), 
        returnDate: "DECEMBER 2025"
    },
    {
        name: "CREW-11 MISSION",
        launchTime: new Date("2025-09-01T00:00:00Z").getTime(), 
        returnDate: "FEBRUARY 2026"
    }
];

// ID of the target section (Corrected: only declared once)
const ONGOING_TABLE_ID = 'Ongoing-missions';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Carousel
    if (initialSlides.length > 0) {
        showSlides(slideIndex);
        autoShowSlides();
    }
    // 2. Initialize Upcoming Launches
    fetchUpcomingLaunchesData();
    // 3. Initialize Ongoing Missions (The missing call)
    initializeOngoingMissions(); 
});

// --- MANUAL CONTROL FUNCTIONS (OK) ---

function plusSlides(n) {
    clearTimeout(slideTimeout); 
    showSlides(slideIndex += n);
    autoShowSlides(); 
}

function currentSlide(n) {
    clearTimeout(slideTimeout); 
    showSlides(slideIndex = n);
    autoShowSlides(); 
}

// --- CORE LOGIC (OK) ---

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) { 
        slideIndex = 1; 
    }
    if (n < 1) { 
        slideIndex = slides.length; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if (dots[i]) {
            dots[i].className = dots[i].className.replace(" active", ""); 
        }
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// --- AUTO-PLAY FUNCTIONALITY (OK) ---

function autoShowSlides() {
    clearTimeout(slideTimeout); 
    
    slideTimeout = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
        autoShowSlides();
    }, autoSlideInterval);
}

// ------------------------------------------
// --- UPCOMING LAUNCHES API LOGIC (FIXED TO USE API DATA) ---
// ------------------------------------------

async function fetchUpcomingLaunchesData() {
    const tableBody = document.getElementById(UPCOMING_TABLE_BODY_ID);
    if (!tableBody) return;

    // Corrected colspan to 5 for the loading message
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center;">Loading upcoming launches...</td></tr>`; 

    try {
         // API Query setup remains the same
         const query = {
             query: { upcoming: true },
             options: {
                 // Ensure date_precision is here to check for TBD
                 select: ['name', 'date_utc', 'rocket', 'launchpad', 'cores', 'payloads', 'date_precision', 'id'], 
                 sort: { date_utc: 1 }, 
                 limit: 5 
             }
         };

         const response = await fetch(UPCOMING_API_QUERY_URL, {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(query),
         });
         
         if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
         }
         
         const data = await response.json();
         const missionsToShow = data.docs;
        
         // 3. Fetch Detailed Information for all lookup tables concurrently (OK)
         const [rocketsResponse, launchpadsResponse, landpadsResponse] = await Promise.all([
             fetch('https://api.spacexdata.com/v4/rockets'),
             fetch('https://api.spacexdata.com/v4/launchpads'),
             fetch('https://api.spacexdata.com/v4/landpads') 
         ]);

         const rockets = await rocketsResponse.json();
         const launchpads = await launchpadsResponse.json();
         const landpads = await landpadsResponse.json(); 

         // Create Maps for quick lookup
         const rocketMap = new Map(rockets.map(r => [r.id, r]));
         const launchpadMap = new Map(launchpads.map(p => [p.id, p]));
         const landpadMap = new Map(landpads.map(l => [l.id, l]));

         // Clear the loading message
         tableBody.innerHTML = ''; 

         // 5. Populate the table rows
         missionsToShow.forEach(launch => {
             const newRow = tableBody.insertRow(); 
             
             // --- Date and Countdown Logic ---
             const launchDate = new Date(launch.date_utc);
             // date_precision must be minute or hour for a precise countdown
             const isTbdDate = launch.date_precision !== 'hour' && launch.date_precision !== 'minute';
             const launchId = launch.id;
             
             let dateContent;
             let dateString = launchDate.toLocaleDateString();

             if (!isTbdDate) {
                 // Launch time is known, combine date, time, and countdown
                 dateContent = `
                     ${dateString} ${launchDate.toLocaleTimeString()}
                     <br>
                     <span id="countdown-${launchId}" data-launch-time="${launchDate.getTime()}">Calculating...</span>
                 `;
             } else {
                 // Date is TBD
                 dateContent = dateString || 'TBD';
             }

             // --- Landing Status Logic (Simplified using Maps) ---
             const core = launch.cores[0];
             let landingStatus = 'TBD Landing/Status';
             
             if (core) {
                 if (core.landpad) {
                    // Get landpad name from map
                    landingStatus = landpadMap.get(core.landpad)?.full_name || 'Attempted Landing Site';
                 } else if (core.landing_attempt) {
                    // Check attempt status
                    landingStatus = core.landing_success ? 'Successful Landing' : 'Failed Landing';
                 } else if (core.landing_type) {
                    // Check type (like ocean splashdown)
                    landingStatus = core.landing_type === 'Ocean' ? 'Ocean Splashdown' : 'Attempt TBD';
                 }
             }

             // ---------------------------------------------
             // --- FIXED INSERT CELLS TO USE API DATA ---
             // ---------------------------------------------
             // Cell 0: Mission Name
             newRow.insertCell(0).textContent = launch.name || 'TBD Mission'; 
             
             // Cell 1: Vehicle (Uses rocketMap)
             newRow.insertCell(1).textContent = rocketMap.get(launch.rocket)?.name || 'TBD Vehicle';                 
             
             // Cell 2: Launch Site (Uses launchpadMap)
             newRow.insertCell(2).textContent = launchpadMap.get(launch.launchpad)?.full_name || 'TBD Site';                 
             
             // Cell 3: Landing Site/Status
             newRow.insertCell(3).textContent = landingStatus;             
             
             // Cell 4 (Final Column): Launch Date/Time & Countdown 
             newRow.insertCell(4).innerHTML = dateContent; // Use innerHTML to render the <br> and <span>
         });
         
         // NOTE: You would typically call a function here to start the countdown timers
         // startLaunchTimers(); 

    } catch (error) {
        console.error("Failed to load upcoming launch data:", error);
        // Corrected colspan in the error message
        tableBody.innerHTML = `<tr><td colspan="5" style="color: red; text-align: center;">Error loading launch data. ${error.message}</td></tr>`;
    }
}


// --- ONGOING TIMER LOGIC (OK) ---

function formatElapsedTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, '0');
    return `${days}d ${hours}:${minutes}:${seconds}`;
}

let ongoingInterval;
function updateOngoingTimers() {
    const ongoingElements = document.querySelectorAll(`#${ONGOING_TABLE_ID} [data-launch-time]`);
    const now = new Date().getTime(); 

    ongoingElements.forEach(element => {
        const launchTimeMs = parseInt(element.getAttribute('data-launch-time'));

        if (!isNaN(launchTimeMs)) {
            const timeElapsed = now - launchTimeMs; 
            element.textContent = formatElapsedTime(timeElapsed);
        }
    });
}

function startOngoingTimers() {
    if (ongoingInterval) {
        clearInterval(ongoingInterval);
    }
    ongoingInterval = setInterval(updateOngoingTimers, 1000);
}


// --- DOM POPULATION FUNCTION (OK) ---
function initializeOngoingMissions() {
    const sectionElement = document.getElementById(ONGOING_TABLE_ID);
    if (!sectionElement) return;

    const table = sectionElement.querySelector('table');
    if (!table) return;

    
    const rows = table.querySelectorAll('tr'); 
    
    ONGOING_MISSIONS_DATA.forEach((mission, index) => {
        
        const dataRowIndex = index + 1;
        const row = rows[dataRowIndex]; 
        
        if (!row) {
            console.warn(`Could not find <tr> for mission index ${index}. Skipping ${mission.name}.`);
            return; 
        }
        
        const timeOnOrbitCell = row.querySelectorAll('td')[1];
        
        if (timeOnOrbitCell) {
            timeOnOrbitCell.setAttribute('data-launch-time', mission.launchTime);
            
            timeOnOrbitCell.textContent = formatElapsedTime(new Date().getTime() - mission.launchTime);
        } else {
             console.warn(`Could not find the 'Time On Orbit' cell for ${mission.name}.`);
        }
        
        const returnDateCell = row.querySelectorAll('td')[2];
        if (returnDateCell) {
            returnDateCell.textContent = mission.returnDate;
        }
    });
    
    startOngoingTimers();
}