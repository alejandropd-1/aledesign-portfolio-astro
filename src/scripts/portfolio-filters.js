// Portfolio filters - Super basic JavaScript for filtering jobs
// Following Wes Bos level 16 concepts

console.log('Portfolio filters script loaded!');

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up filters...');
    
    // Get all the filter buttons
    const showAllBtn = document.getElementById('show-all');
    const showReactBtn = document.getElementById('show-react');
    const showDesignBtn = document.getElementById('show-design');
    
    console.log('Filter buttons found:', showAllBtn, showReactBtn, showDesignBtn);
    
    // Get all job cards
    const allJobCards = document.querySelectorAll('.job-card');
    console.log('Job cards found:', allJobCards.length);
    
    // Function to show all projects
    function showAll() {
        console.log('Showing all projects...');
        
        // Loop through all job cards and show them
        for (let i = 0; i < allJobCards.length; i++) {
            console.log('Showing job card:', i);
            allJobCards[i].style.display = 'block';
        }
        
        // Update active button
        removeActiveFromAllButtons();
        showAllBtn.classList.add('active');
        console.log('All projects visible!');
    }
    
    // Function to show only React projects
    function showOnlyReact() {
        console.log('Showing only React projects...');
        
        // Loop through all job cards
        for (let i = 0; i < allJobCards.length; i++) {
            const jobCard = allJobCards[i];
            const dataType = jobCard.getAttribute('data-type');
            
            console.log('Job card', i, 'has data-type:', dataType);
            
            // Show if it's a React project, hide if not
            if (dataType === 'react') {
                console.log('Showing React project:', i);
                jobCard.style.display = 'block';
            } else {
                console.log('Hiding non-React project:', i);
                jobCard.style.display = 'none';
            }
        }
        
        // Update active button
        removeActiveFromAllButtons();
        showReactBtn.classList.add('active');
        console.log('Only React projects visible!');
    }
    
    // Function to show only Design projects
    function showOnlyDesign() {
        console.log('Showing only Design projects...');
        
        // Loop through all job cards
        for (let i = 0; i < allJobCards.length; i++) {
            const jobCard = allJobCards[i];
            const dataType = jobCard.getAttribute('data-type');
            
            console.log('Job card', i, 'has data-type:', dataType);
            
            // Show if it's a Design project, hide if not
            if (dataType === 'design') {
                console.log('Showing Design project:', i);
                jobCard.style.display = 'block';
            } else {
                console.log('Hiding non-Design project:', i);
                jobCard.style.display = 'none';
            }
        }
        
        // Update active button
        removeActiveFromAllButtons();
        showDesignBtn.classList.add('active');
        console.log('Only Design projects visible!');
    }
    
    // Helper function to remove active class from all buttons
    function removeActiveFromAllButtons() {
        console.log('Removing active class from all buttons...');
        showAllBtn.classList.remove('active');
        showReactBtn.classList.remove('active');
        showDesignBtn.classList.remove('active');
    }
    
    // Add event listeners to buttons
    console.log('Adding event listeners to buttons...');
    
    showAllBtn.addEventListener('click', function() {
        console.log('All button clicked!');
        showAll();
    });
    
    showReactBtn.addEventListener('click', function() {
        console.log('React button clicked!');
        showOnlyReact();
    });
    
    showDesignBtn.addEventListener('click', function() {
        console.log('Design button clicked!');
        showOnlyDesign();
    });
    
    console.log('All event listeners added successfully!');
    console.log('Filter system ready to use!');
});