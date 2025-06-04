// Enhanced Candidate Data with more realistic profiles
const generateCandidates = () => {
  const baseNames = [
    "Uppendra", "LS", "Lokesh", "Sinchana", "Loki", "Sinchana Gowda",
    "Kempegowda Lokesh", "Leela", "KGL", "Sinchu", "Sathish",
    "Sachin", "Mahesh", "Yuvaraj Dorai", "Aravind", "Balaji", "Rekha", "Jayanth",
    "Harsha Vardhan", "Babu", "Reeta", "Jyothi", "Roosi", "Kannaiah",
    "Anandhama", "Muthulaiaiah", "Jagan", "Punja Jagannath", "SL",
    "Captain Jack Sparrow", "Kempegowda"
  ];

  const additionalNames = [
    "Aditya", "Anjali", "Bhavya", "Chirag", "Dinesh", "Esha", "Faizal", "Gaurav",
    "Hema", "Ishaan", "Jayesh", "Kavita", "Lalit", "Manisha", "Nikhil", "Omkar",
    "Pooja", "Qasim", "Ritika", "Sameer", "Tanvi", "Umesh", "Vandana", "Yash",
    "Zoya", "Akash", "Bhavana", "Chetan", "Divya", "Ekta", "Farhan", "Geeta",
    "Harish", "Indira", "Jitesh", "Kiran", "Laxmi", "Mohit", "Neha", "Om",
    "Pranav", "Rohit", "Sonal", "Tarun", "Uday", "Veena", "Yamini", "Zain",
    "Alok", "Bharti", "Chetna", "Deepak", "Eshan", "Feroz", "Gita", "Hitesh",
    "Isha", "Jagdish", "Kunal", "Lavanya", "Mitali", "Naveen", "Ojas", "Parth",
    "Rhea", "Sahil", "Trisha", "Vikas", "Yashika", "Zeeshan", "Ankur", "Bina",
    "Chaitanya", "Diksha", "Eshwar", "Falguni", "Gagan", "Hemant"
  ];

  // Mix names with pattern: 1 base, then 2-3 additional, then 1 base...
  const mixedNames = [];
  let baseIdx = 0;
  let addIdx = 0;

  while (mixedNames.length < 101) {
    if (baseIdx < baseNames.length) {
      mixedNames.push(baseNames[baseIdx]);
      baseIdx++;
    }

    const toAdd = Math.min(3, 101 - mixedNames.length);
    for (let i = 0; i < toAdd && addIdx < additionalNames.length; i++) {
      mixedNames.push(additionalNames[addIdx]);
      addIdx++;
    }
  }

  // Enhanced jobs data with salary ranges and more skills
  const jobs = [
    { job: "Frontend Developer", skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Redux", "Next.js"], salary: [800000, 1500000] },
    { job: "Software Prompt Engineer", skills: ["Prompt Engineering", "Python", "NLP", "AI", "Machine Learning", "LLMs"], salary: [1200000, 2000000] },
    { job: "Backend Developer", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Docker"], salary: [900000, 1600000] },
    { job: "Full Stack Developer", skills: ["JavaScript", "Node.js", "React", "MongoDB", "GraphQL", "AWS"], salary: [1000000, 1800000] },
    { job: "Data Scientist", skills: ["Python", "Machine Learning", "Statistics", "Pandas", "NumPy", "TensorFlow"], salary: [1200000, 2200000] },
    { job: "UX Designer", skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "UI/UX", "Wireframing"], salary: [700000, 1400000] },
    { job: "Project Manager", skills: ["Agile", "Scrum", "JIRA", "Leadership", "Communication", "Risk Management"], salary: [1500000, 2500000] },
    { job: "Digital Marketing Specialist", skills: ["SEO", "Content Marketing", "Google Analytics", "Social Media", "PPC", "Email Marketing"], salary: [500000, 1200000] },
    { job: "Sales Executive", skills: ["Sales", "CRM", "Negotiation", "B2B", "Lead Generation", "Client Relations"], salary: [600000, 1500000] },
    { job: "HR Manager", skills: ["Recruitment", "Employee Relations", "Payroll", "Talent Management", "HR Policies"], salary: [800000, 1500000] },
    { job: "Customer Support", skills: ["Communication", "Problem Solving", "CRM", "Zendesk", "Customer Service"], salary: [300000, 800000] },
    { job: "Business Analyst", skills: ["Excel", "SQL", "Data Analysis", "Requirements Gathering", "Power BI", "Tableau"], salary: [800000, 1500000] },
    { job: "QA Engineer", skills: ["Testing", "Automation", "Selenium", "JIRA", "Test Cases", "Regression Testing"], salary: [600000, 1200000] },
    { job: "DevOps Engineer", skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform", "Jenkins"], salary: [1200000, 2200000] },
    { job: "Content Writer", skills: ["SEO", "Content Marketing", "Creative Writing", "Blogging", "Copywriting", "Editing"], salary: [400000, 1000000] }
  ];

  // Locations in India with some remote options
  const locations = [
    "Bengaluru, Karnataka", "Hyderabad, Telangana", "Chennai, Tamil Nadu", 
    "Mumbai, Maharashtra", "Delhi, NCR", "Pune, Maharashtra", 
    "Kolkata, West Bengal", "Ahmedabad, Gujarat", "Jaipur, Rajasthan", 
    "Remote (India)", "Remote (Global)", "Gurugram, Haryana", 
    "Noida, Uttar Pradesh", "Coimbatore, Tamil Nadu", "Kochi, Kerala"
  ];

  // Generate realistic candidate data
  return mixedNames.map(name => {
    const jobObj = jobs[Math.floor(Math.random() * jobs.length)];
    const experience = Math.floor(Math.random() * 11); // 0 to 10 years
    const salary = Math.floor(
      jobObj.salary[0] + 
      (experience / 10) * (jobObj.salary[1] - jobObj.salary[0]) * 
      (0.8 + Math.random() * 0.4) // Some variance
    );
    
    // Add some additional random skills (1-3)
    const additionalSkills = [
      "Git", "GitHub", "Problem Solving", "Teamwork", "Communication",
      "Time Management", "Debugging", "Algorithms", "Data Structures",
      "OOP", "Functional Programming", "Linux", "Bash", "Cloud Computing"
    ];
    
    const extraSkills = [];
    const numExtra = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numExtra; i++) {
      const randomSkill = additionalSkills[Math.floor(Math.random() * additionalSkills.length)];
      if (!jobObj.skills.includes(randomSkill)) {
        extraSkills.push(randomSkill);
      }
    }
    
    const allSkills = [...jobObj.skills, ...extraSkills];
    
    // Add some candidates with preferred work type
    const workType = Math.random() > 0.7 ? 
      (Math.random() > 0.5 ? "Remote" : "Hybrid") : 
      "On-site";
    
    return {
      id: `candidate-${Math.random().toString(36).substr(2, 9)}`,
      name: name,
      job: jobObj.job,
      skills: allSkills,
      experience: experience,
      location: locations[Math.floor(Math.random() * locations.length)],
      salary: salary,
      workType: workType,
      saved: false,
      lastActive: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
      education: Math.random() > 0.3 ? "Bachelor's Degree" : 
                (Math.random() > 0.5 ? "Master's Degree" : "Diploma")
    };
  });
};

// Related skill keywords map for fuzzy matching
const relatedSkillsMap = {
  "js": ["javascript", "react", "node.js", "express", "full stack", "frontend", "backend"],
  "javascript": ["js", "react", "node.js", "express", "typescript"],
  "react": ["reactjs", "js", "javascript", "redux", "next.js"],
  "python": ["nlp", "machine learning", "prompt engineering", "data scientist", "pandas", "numpy"],
  "prompt engineering": ["nlp", "python", "ai", "llms"],
  "prompt": ["ml", "python", "ai"],
  "ai": ["data science", "machine learning", "python", "artificial intelligence"],
  "nlp": ["python", "prompt engineering", "natural language processing"],
  "machine learning": ["python", "data scientist", "nlp", "deep learning"],
  "seo": ["digital marketing", "content marketing", "google analytics", "search engine optimization"],
  "crm": ["sales", "customer support", "customer relationship management"],
  "testing": ["quality assurance", "automation", "selenium", "qa"],
  "automation": ["testing", "selenium", "qa"],
  "selenium": ["testing", "automation", "webdriver"],
  "aws": ["devops", "docker", "ci/cd", "amazon web services", "cloud"],
  "docker": ["devops", "aws", "ci/cd", "containers"],
  "ci/cd": ["devops", "aws", "docker", "continuous integration", "continuous deployment"],
  "node": ["node.js", "javascript", "backend"],
  "express": ["node.js", "backend", "javascript"],
  "typescript": ["javascript", "ts", "angular"],
  "angular": ["typescript", "frontend", "javascript"]
};

// Related job titles for suggestions
const relatedJobsMap = {
  "developer": ["frontend", "backend", "full stack", "software"],
  "engineer": ["software", "devops", "qa", "data"],
  "designer": ["ux", "ui", "graphic", "product"],
  "manager": ["project", "product", "hr", "sales"],
  "analyst": ["business", "data", "financial", "systems"]
};

// Related locations for suggestions
const relatedLocationsMap = {
  "bengaluru": ["bangalore", "karnataka"],
  "hyderabad": ["telangana"],
  "chennai": ["tamil nadu"],
  "mumbai": ["maharashtra"],
  "delhi": ["ncr", "new delhi"],
  "pune": ["maharashtra"],
  "remote": ["work from home", "wfh", "global"]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const candidates = generateCandidates();
  let filteredCandidates = [...candidates];
  let currentPage = 1;
  const candidatesPerPage = 9;
  let currentView = 'grid';
  let currentSort = 'name-asc';

  // DOM elements
  const skillInput = document.getElementById('skillInput');
  const experienceInput = document.getElementById('experienceInput');
  const expRange = document.getElementById('expRange');
  const locationInput = document.getElementById('locationInput');
  const jobInput = document.getElementById('jobInput');
  const filterBtn = document.getElementById('filterBtn');
  const resetBtn = document.getElementById('resetBtn');
  const candidateList = document.getElementById('candidateList');
  const totalCandidatesEl = document.getElementById('totalCandidates');
  const filteredCandidatesEl = document.getElementById('filteredCandidates');
  const avgExperienceEl = document.getElementById('avgExperience');
  const showingCountEl = document.getElementById('showingCount');
  const totalCountEl = document.getElementById('totalCount');
  const pageInfoEl = document.getElementById('pageInfo');
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');
  const sortSelect = document.getElementById('sortSelect');
  const viewBtns = document.querySelectorAll('.view-btn');
  const exportBtn = document.getElementById('exportBtn');
  const newSearchBtn = document.getElementById('newSearchBtn');
  const notification = document.getElementById('notification');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');

  // Initialize stats
  totalCandidatesEl.textContent = candidates.length;
  filteredCandidatesEl.textContent = candidates.length;
  updateStats();

  // Initial render
  renderCandidates();

  // Event listeners
  filterBtn.addEventListener('click', applyFilters);
  resetBtn.addEventListener('click', resetFilters);
  expRange.addEventListener('input', updateExperienceInput);
  experienceInput.addEventListener('input', updateExperienceRange);
  skillInput.addEventListener('input', () => showSuggestions(skillInput, 'skill'));
  locationInput.addEventListener('input', () => showSuggestions(locationInput, 'location'));
  jobInput.addEventListener('input', () => showSuggestions(jobInput, 'job'));
  prevPageBtn.addEventListener('click', goToPrevPage);
  nextPageBtn.addEventListener('click', goToNextPage);
  sortSelect.addEventListener('change', updateSort);
  viewBtns.forEach(btn => btn.addEventListener('click', changeView));
  exportBtn.addEventListener('click', exportResults);
  newSearchBtn.addEventListener('click', newSearch);

  // Sync sidebar scroll with main content
  mainContent.addEventListener('scroll', () => {
    sidebar.scrollTop = mainContent.scrollTop;
  });

  // Enhanced card hover effects
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.candidate-card')) {
      const card = e.target.closest('.candidate-card');
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
      card.style.borderColor = 'var(--primary-color)';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.candidate-card')) {
      const card = e.target.closest('.candidate-card');
      card.style.transform = '';
      card.style.boxShadow = '';
      card.style.borderColor = 'var(--light-gray)';
    }
  });

  // Utility functions
  function cleanString(str) {
    return str.toLowerCase().replace(/[^\w\s]/g, '').trim();
  }

  function skillMatches(inputSkill, candidateSkills) {
    if (!inputSkill) return true;

    const skill = cleanString(inputSkill);
    const candidateSkillsCleaned = candidateSkills.map(cleanString);

    // Direct partial match (both ways)
    for (const cSkill of candidateSkillsCleaned) {
      if (cSkill.includes(skill) || skill.includes(cSkill)) {
        return true;
      }
    }

    // Related skill matching
    const related = relatedSkillsMap[skill];
    if (related) {
      for (const rSkill of related) {
        if (candidateSkillsCleaned.some(cSkill => cSkill.includes(rSkill))) {
          return true;
        }
      }
    }

    // Reverse related check
    for (const cSkill of candidateSkillsCleaned) {
      const related = relatedSkillsMap[cSkill];
      if (related && related.some(rSkill => skill.includes(rSkill))) {
        return true;
      }
    }

    return false;
  }

  function locationMatches(inputLoc, candidateLoc) {
    if (!inputLoc) return true;
    const loc = cleanString(inputLoc);
    const candidateLocCleaned = cleanString(candidateLoc);

    // Direct match
    if (candidateLocCleaned.includes(loc)) {
      return true;
    }

    // Related location matching
    const related = relatedLocationsMap[loc];
    if (related) {
      return related.some(rLoc => candidateLocCleaned.includes(rLoc));
    }

    return false;
  }

  function jobMatches(inputJob, candidateJob) {
    if (!inputJob) return true;
    const job = cleanString(inputJob);
    const candidateJobCleaned = cleanString(candidateJob);

    // Direct match
    if (candidateJobCleaned.includes(job)) {
      return true;
    }

    // Related job matching
    const related = relatedJobsMap[job];
    if (related) {
      return related.some(rJob => candidateJobCleaned.includes(rJob));
    }

    return false;
  }

  function showSuggestions(inputElement, type) {
    const inputValue = inputElement.value.trim();
    if (!inputValue) {
      clearSuggestions(type);
      return;
    }

    const cleanedInput = cleanString(inputValue);
    const suggestions = [];
    let suggestionContainer;

    switch (type) {
      case 'skill':
        for (const key in relatedSkillsMap) {
          if (key.startsWith(cleanedInput)) {
            suggestions.push(key);
          }
        }
        suggestionContainer = document.getElementById('skillSuggestions');
        break;
      case 'location':
        for (const key in relatedLocationsMap) {
          if (key.startsWith(cleanedInput)) {
            suggestions.push(key);
          }
        }
        suggestionContainer = document.getElementById('locationSuggestions');
        break;
      case 'job':
        for (const key in relatedJobsMap) {
          if (key.startsWith(cleanedInput)) {
            suggestions.push(key);
          }
        }
        suggestionContainer = document.getElementById('jobSuggestions');
        break;
    }

    if (suggestions.length > 0) {
      suggestionContainer.innerHTML = suggestions
        .map(s => `<div class="suggestion-chip">${s}</div>`)
        .join('');

      // Add click handlers to suggestion chips
      document.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          inputElement.value = chip.textContent;
          clearSuggestions(type);
          if (type === 'skill') {
            applyFilters();
          }
        });
      });
    } else {
      clearSuggestions(type);
    }
  }

  function clearSuggestions(type) {
    let suggestionContainer;
    switch (type) {
      case 'skill':
        suggestionContainer = document.getElementById('skillSuggestions');
        break;
      case 'location':
        suggestionContainer = document.getElementById('locationSuggestions');
        break;
      case 'job':
        suggestionContainer = document.getElementById('jobSuggestions');
        break;
    }
    suggestionContainer.innerHTML = '';
  }

  function updateExperienceInput() {
    experienceInput.value = expRange.value;
  }

  function updateExperienceRange() {
    const value = Math.min(10, Math.max(0, parseInt(experienceInput.value) || 0));
    expRange.value = value;
    experienceInput.value = value;
  }

  function applyFilters() {
    const skillFilter = skillInput.value.trim();
    const expFilter = experienceInput.value;
    const locFilter = locationInput.value.trim();
    const jobFilter = jobInput.value.trim();

    filteredCandidates = candidates.filter(c => {
      // Skill match
      if (!skillMatches(skillFilter, c.skills)) {
        return false;
      }
      // Experience match
      if (expFilter && c.experience < parseInt(expFilter)) {
        return false;
      }
      // Location match
      if (locFilter && !locationMatches(locFilter, c.location)) {
        return false;
      }
      // Job match
      if (jobFilter && !jobMatches(jobFilter, c.job)) {
        return false;
      }
      return true;
    });

    currentPage = 1;
    updateSort();
    updateStats();
    renderCandidates();
    showNotification(`Found ${filteredCandidates.length} matching candidates`);
  }

  function resetFilters() {
    skillInput.value = '';
    locationInput.value = '';
    jobInput.value = '';
    experienceInput.value = '';
    expRange.value = 0;
    clearSuggestions('skill');
    clearSuggestions('location');
    clearSuggestions('job');
    
    filteredCandidates = [...candidates];
    currentPage = 1;
    updateSort();
    updateStats();
    renderCandidates();
    showNotification('Filters reset');
  }

  function updateSort() {
    const sortValue = sortSelect.value;
    currentSort = sortValue;

    filteredCandidates.sort((a, b) => {
      switch (sortValue) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'exp-asc':
          return a.experience - b.experience;
        case 'exp-desc':
          return b.experience - a.experience;
        case 'random':
          return Math.random() - 0.5;
        default:
          return 0;
      }
    });

    renderCandidates();
  }

  function changeView(e) {
    const view = e.currentTarget.dataset.view;
    currentView = view;
    
    viewBtns.forEach(btn => {
      if (btn.dataset.view === view) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    candidateList.className = `${view}-view`;
    renderCandidates();
  }

  function renderCandidates() {
    const startIdx = (currentPage - 1) * candidatesPerPage;
    const endIdx = startIdx + candidatesPerPage;
    const candidatesToShow = filteredCandidates.slice(startIdx, endIdx);

    candidateList.innerHTML = '';

    if (candidatesToShow.length === 0) {
      candidateList.innerHTML = `
        <div class="no-results">
          <i class="fas fa-user-slash"></i>
          <h3>No candidates found</h3>
          <p>Try adjusting your filters</p>
        </div>
      `;
      return;
    }

    candidatesToShow.forEach(candidate => {
      const card = document.createElement('div');
      card.className = 'candidate-card';
      
      // Get initials for avatar with random color
      
      const initials = candidate.name.split(' ').map(n => n[0]).join('').toUpperCase();
      const colors = ['#4361ee', '#3f37c9', '#4895ef', '#4cc9f0', '#7209b7'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Format salary

      const formattedSalary = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(candidate.salary);
      
      // Format last active date
      const lastActive = new Date(candidate.lastActive);
      const daysAgo = Math.floor((new Date() - lastActive) / (1000 * 60 * 60 * 24));
      const activeText = daysAgo === 0 ? 'Today' : 
                       daysAgo === 1 ? 'Yesterday' : 
                       `${daysAgo} days ago`;
      
      // Calculate match percentage (for fun)
      const matchPercent = Math.min(100, 70 + Math.floor(Math.random() * 30));
      
      card.innerHTML = `
        <div class="candidate-avatar" style="background-color: ${randomColor}20; color: ${randomColor}">
          ${initials}
          <div class="match-badge">${matchPercent}% Match</div>
        </div>
        <div class="candidate-details">
          <h3>${candidate.name}</h3>
          <div class="candidate-job">
            <i class="fas fa-briefcase"></i>
            ${candidate.job}
          </div>
          <div class="candidate-meta">
            <div class="meta-item">
              <i class="fas fa-map-marker-alt"></i>
              ${candidate.location}
            </div>
            <div class="meta-item">
              <i class="fas fa-clock"></i>
              ${activeText}
            </div>
            <div class="meta-item">
              <i class="fas fa-certificate"></i>
              ${candidate.experience}+ yrs
            </div>
            <div class="meta-item">
              <i class="fas fa-rupee-sign"></i>
              ${formattedSalary}/yr
            </div>
          </div>
          <div class="candidate-skills">
            <span class="skills-label">Top Skills:</span>
            ${candidate.skills.slice(0, 5).map(skill => 
              `<span class="skill-tag" style="background-color: ${randomColor}10; color: ${randomColor}">${skill}</span>`).join('')}
            ${candidate.skills.length > 5 ? 
              `<span class="skill-tag">+${candidate.skills.length - 5} more</span>` : ''}
          </div>
        </div>
        <div class="candidate-actions">
          <button class="action-btn save" data-id="${candidate.id}">
            <i class="fas fa-${candidate.saved ? 'heart' : 'heart'}"></i>
            ${candidate.saved ? 'Saved' : 'Save'}
          </button>
          <button class="action-btn contact-btn">
            <i class="fas fa-envelope"></i>
            Contact
          </button>
          <button class="action-btn more-btn">
            <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>
      `;
      
      candidateList.appendChild(card);
    });

    // Add event listeners to save buttons

    document.querySelectorAll('.action-btn.save').forEach(btn => {
      btn.addEventListener('click', function() {
        const candidateId = this.dataset.id;
        const candidate = candidates.find(c => c.id === candidateId);
        candidate.saved = !candidate.saved;
        this.innerHTML = `
          <i class="fas fa-${candidate.saved ? 'heart' : 'heart'}"></i>
          ${candidate.saved ? 'Saved' : 'Save'}
        `;
        if (candidate.saved) {
          this.classList.add('saved');
        } else {
          this.classList.remove('saved');
        }
        showNotification(candidate.saved ? 'Candidate saved' : 'Candidate removed');
      });
    });

    // Add hover effects to contact buttons

    document.querySelectorAll('.contact-btn').forEach(btn => {
      btn.addEventListener('mouseover', () => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Message';
      });
      btn.addEventListener('mouseout', () => {
        btn.innerHTML = '<i class="fas fa-envelope"></i> Contact';
      });
    });

    // Update pagination controls

    updatePagination();
  }

  function updatePagination() {
    const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);
    
    pageInfoEl.textContent = `Page ${currentPage} of ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    
    showingCountEl.textContent = Math.min(
      candidatesPerPage, 
      filteredCandidates.length - (currentPage - 1) * candidatesPerPage
    );
    totalCountEl.textContent = filteredCandidates.length;
  }

  function goToPrevPage() {
    if (currentPage > 1) {
      currentPage--;
      renderCandidates();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function goToNextPage() {
    const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderCandidates();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function updateStats() {
    filteredCandidatesEl.textContent = filteredCandidates.length;
    
    if (filteredCandidates.length > 0) {
      const totalExp = filteredCandidates.reduce((sum, c) => sum + c.experience, 0);
      const avgExp = (totalExp / filteredCandidates.length).toFixed(1);
      avgExperienceEl.textContent = avgExp;
    } else {
      avgExperienceEl.textContent = '0';
    }
  }

  function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }

  function exportResults() {
    // Simple CSV export implementation
    if (filteredCandidates.length === 0) {
      showNotification('No candidates to export');
      return;
    }
    
    const headers = ['Name', 'Job', 'Skills', 'Experience', 'Location', 'Salary', 'Work Type'];
    const csvContent = [
      headers.join(','),
      ...filteredCandidates.map(candidate => [
        `"${candidate.name}"`,
        `"${candidate.job}"`,
        `"${candidate.skills.join(', ')}"`,
        candidate.experience,
        `"${candidate.location}"`,
        candidate.salary,
        `"${candidate.workType}"`
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'candidates_export.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification(`Exported ${filteredCandidates.length} candidates to CSV`);
  }

  function newSearch() {
    resetFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showNotification('New search started - all filters reset');
  }
});