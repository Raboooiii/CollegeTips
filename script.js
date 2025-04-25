// Sample gallery data (in a real scenario, this would come from an API)
const galleryData = [
    {
        id: 9,
        title: "The Legend who made CollegeTips",
        description: "Vipin Tripathi - GenZ generation goes through a lot. But don't forget that CollegeTips.in is with you forever",
        category: "team",
        date: "2023-02-15",
        imageUrl: "images/Owner.png"
    },
    {
        id: 11,
        title: "Office Fun Skits",
        description: "We work hard but we also know how to have fun during breaks to make some kind of content!",
        category: "play",
        date: "2023-03-25",
        imageUrl: "images/fun4.png"
    },
    {
        id: 1,
        title: "Team Members",
        description: "The members who are making India's fastest growing Start-up aiming to make students' life Easy and Happening!",
        category: "team",
        date: "2023-05-15",
        imageUrl: "images/Friends1.png"
    },
    {
        id: 2,
        title: "College Seminar by CollegeTips",
        description: "Our campaign to promote students to do internships for work experience",
        category: "campaigns",
        date: "2023-06-02",
        imageUrl: "images/meet1.png"
    },
    {
        id: 7,
        title: "From strangers to Family",
        description: "Trying to create the best family for every student possible",
        category: "Ghibili",
        date: "2023-06-15",
        imageUrl: "images/g2.png"
    },
    {
        id: 3,
        title: "Office Fun",
        description: "We work hard but we also know how to have fun during breaks!",
        category: "play",
        date: "2023-04-28",
        imageUrl: "images/fun1.png"
    },
    {
        id: 9,
        title: "Team Members",
        description: "The members who are making India's fastest growing Start-up aiming to make students' life Easy and Happening!",
        category: "team",
        date: "2023-02-15",
        imageUrl: "images/member2.png"
    },
    {
        id: 4,
        title: "Content Creation",
        description: "Behind the scenes of creating our Instagram reels",
        category: "bts",
        date: "2023-05-20",
        imageUrl: "images/wh1.png"
    },
    {
        id: 11,
        title: "We Love Parties.",
        description: "CollegeTips.in is a place where we not just work, but create beautiful memories with a splash of fun. Celebrations are a usual part of our life at CollegeTips.in. Every celebration brings an opportunity to create indelible memories and a beautiful album.",
        category: "play",
        date: "2023-03-25",
        imageUrl: "images/p1.png"
    },
    {
        id: 5,
        title: "Life @ CollegeTips",
        description: "Have Fun and Relax while making improvements in your life😁",
        category: "team",
        date: "2023-03-10",
        imageUrl: "images/life1.png"
    },
    {
        id: 6,
        title: "College Seminar by CollegeTips",
        description: "Our campaign to promote students to do internships for work experience",
        category: "campaigns",
        date: "2023-05-01",
        imageUrl: "images/meet2.png"
    },
    {
        id: 7,
        title: "Office Fun",
        description: "We work hard but we also know how to have fun during breaks!",
        category: "play",
        date: "2023-06-15",
        imageUrl: "images/fun2.png"
    },
    {
        id: 7,
        title: "Fun with the Ghibili",
        description: "CollegeTips Sign looks great in Ghibili🤪",
        category: "Ghibili",
        date: "2023-06-15",
        imageUrl: "images/g1.png"
    },
    {
        id: 13,
        title: "For Society: CT Care Volunteer Program",
        description: "We all want a healthy community, a peaceful place where people can live and work together in harmony. We all have a lot of ideas to make that happen but the big question is, who will make that happen? We at CollegeTips.in Community are looking for students, who are interested in volunteering assignments. These assignments include various social reforming activities. We are providing a platform where volunteers and the needy authorities can connect with each other and together they can work for a social cause.",
        category: "campaigns",
        date: "2023-05-10",
        imageUrl: "images/Program3.png"
    },
    {
        id: 8,
        title: "Shooting Day",
        description: "Setting up equipment for our video shoot",
        category: "bts",
        date: "2023-04-05",
        imageUrl: "images/wh2.png"
    },
    {
        id: 7,
        title: "Like Minded People",
        description: "Our community comprises members from a wide talent pool from all across the country. We have work for everyone here, and we respect everyone's passion. We believe that choosing your passion as profession is the best thing you could do!",
        category: "play",
        date: "2023-06-15",
        imageUrl: "images/p2.png"
    },
    {
        id: 9,
        title: "Life @ CollegeTips",
        description: "Have Fun and Relax while making improvements in your life😁",
        category: "team",
        date: "2023-02-15",
        imageUrl: "images/life2.png"
    },
    {
        id: 13,
        title: "For Creators: Social Media Training Program.",
        description: "CollegeTips.in is India's fastest growing youth community that provides a platform for youngsters to follow their passion and enhance their skills. It is a Practical Based Virtual Training Program where you'll learn and practically implement your learnings for straight 2 month. In This Program, you will specifically work on Social Media Marketing and Content Creation for in-house projects of CollegeTips.in At the end of this program you will get Three(3) Assured Certificates :- (1) Training Course Certificate. (2) CT Care Social Work Certificate. (3) Internship Certificate.",
        category: "campaigns",
        date: "2023-05-10",
        imageUrl: "images/Program2.webp"
    },
    {
        id: 7,
        title: "Dancing",
        description: "Happy to be a part of CollegeTips",
        category: "Ghibili",
        date: "2023-06-15",
        imageUrl: "images/g3.png"
    },
    {
        id: 7,
        title: "Creative Freedom",
        description: "We are a content creation company, with No Limits! and We are Perfect at it! You can do anything you want! because we think, everyone is creative in their own way.",
        category: "play",
        date: "2023-06-15",
        imageUrl: "images/p3.png"
    },
    {
        id: 10,
        title: "College Seminar by CollegeTips",
        description: "Our campaign to promote students to do internships for work experience",
        category: "campaigns",
        date: "2023-05-10",
        imageUrl: "images/meet3.png"
    },
    {
        id: 9,
        title: "Life @ CollegeTips",
        description: "Have Fun and Relax while making improvements in your life😁",
        category: "team",
        date: "2023-02-15",
        imageUrl: "images/member1.png"
    },
    {
        id: 11,
        title: "Office Fun",
        description: "We work hard but we also know how to have fun during breaks!",
        category: "play",
        date: "2023-03-25",
        imageUrl: "images/fun3.png"
    },
    {
        id: 13,
        title: "For Parents: Digital Literacy Program",
        description: "Nowadays every parent has an android or iOS device, but they don't know how to use it, they are likely dependent on you even for small things, right? This is really sad... NO WORRIES... Here is the solution for all your problems. CollegeTips.in is providing a wonderful chance for you to make your parents go DIGITALLY INDEPENDENT. Digital Literacy Program is for your parents and other elder members to help them get a stronger hold on the digital media platforms. We will also provide tutorials about latest Trends & Tech terms like what is tweet, meme, viral etc. Most Importantly...Dance, Communication, Fitness tutorials & Fashion Style Tips too. How it Works ? For this they don't need to go anywhere to attend class nor they need to download any new app. Every digital need and tutorial will be available on their whatsapp in their respective language.It's time to gift, the one's who always worked hard to provide us the best things ever.",
        category: "campaigns",
        date: "2023-05-10",
        imageUrl: "images/Program1.webp"
    },
    {
        id: 12,
        title: "Editing Process",
        description: "Our content team working hard to perfect every post",
        category: "bts",
        date: "2023-04-18",
        imageUrl: "images/wh3.png"
    },
    {
        id: 9,
        title: "Life @ CollegeTips",
        description: "Have Fun and Relax while making improvements in your life😁",
        category: "team",
        date: "2023-02-15",
        imageUrl: "images/life3.png"
    },
    {
        id: 13,
        title: "College Seminar by CollegeTips",
        description: "Our campaign to promote students to do internships for work experience",
        category: "campaigns",
        date: "2023-05-10",
        imageUrl: "images/meet4.png"
    },
    {
        id: 7,
        title: "Ayyo, Why u smilin like That🥰",
        description: "Owner looks fabulous with and without ghibili",
        category: "Ghibili",
        date: "2023-06-15",
        imageUrl: "images/g4.png"
    },
    {
        id: 13,
        title: "For Everyone: Lifestyle Classes",
        description: "In this Program we will enhance people's personality, interests, opinions, behaviour, and behavioural orientations. Our goal is to enhance people's `way or style of living`. In this program we are going to work on following field: Dance, Communication, Fashion, Fitness, CollegeTips wishes to explore these capabilities and help each one of you to realize your true potential. This program will build in Confidence and Self-esteem in you, to standout in the Society.",
        category: "campaigns",
        date: "2023-05-10",
        imageUrl: "images/Program4.png"
    },
];

// DOM Elements
const galleryContainer = document.querySelector('.gallery-container');
const filterButtons = document.querySelectorAll('.filter-buttons button');
const searchInput = document.querySelector('.search-box input');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('expanded-img');
const imgTitle = document.getElementById('img-title');
const imgDescription = document.getElementById('img-description');
const imgDate = document.getElementById('img-date');
const imgCategory = document.getElementById('img-category');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Current state
let currentFilter = 'all';
let currentSearch = '';
let currentItems = [];
let currentIndex = 0;

// Initialize the gallery
function initGallery() {
    renderGallery(galleryData);
    setupEventListeners();
}

// Render gallery items
function renderGallery(items) {
    galleryContainer.innerHTML = '';
    currentItems = items;
    
    if (items.length === 0) {
        galleryContainer.innerHTML = '<p class="no-results">No photos found matching your criteria.</p>';
        return;
    }
    
    items.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = item.category;
        galleryItem.dataset.index = index;
        
        // Get category display name
        const categoryName = getCategoryDisplayName(item.category);
        
        galleryItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="overlay">
                <h3>${item.title}</h3>
                <p>${item.description.substring(0, 60)}...</p>
            </div>
            <span class="category-badge">${categoryName}</span>
        `;
        
        galleryContainer.appendChild(galleryItem);
    });
}

// Get display name for category
function getCategoryDisplayName(category) {
    switch(category) {
        case 'team': return 'Team Vibes';
        case 'campaigns': return 'Creative Campaigns';
        case 'play': return 'Work Hard, Play Hard';
        case 'bts': return 'Behind-The-Scenes';
        case 'Ghibili': return 'Ghibilis';
        default: return category;
    }
}

// Filter gallery items
function filterGallery() {
    let filteredItems = galleryData;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentFilter);
    }
    
    // Apply search filter
    if (currentSearch) {
        const searchTerm = currentSearch.toLowerCase();
        filteredItems = filteredItems.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderGallery(filteredItems);
}

// Open modal with clicked image
function openModal(index) {
    const item = currentItems[index];
    currentIndex = index;
    
    modalImg.src = item.imageUrl;
    modalImg.alt = item.title;
    imgTitle.textContent = item.title;
    imgDescription.textContent = item.description;
    
    // Format date
    const dateObj = new Date(item.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    imgDate.textContent = dateObj.toLocaleDateString('en-US', options);
    
    imgCategory.textContent = getCategoryDisplayName(item.category);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigate to previous image
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = currentItems.length - 1;
    }
    openModal(currentIndex);
}

// Navigate to next image
function nextImage() {
    if (currentIndex < currentItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    openModal(currentIndex);
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            filterGallery();
        });
    });
    
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        filterGallery();
    });
    
    // Gallery items (using event delegation)
    galleryContainer.addEventListener('click', (e) => {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const index = parseInt(galleryItem.dataset.index);
            openModal(index);
        }
    });
    
    // Modal controls
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        }
    });
}

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);

