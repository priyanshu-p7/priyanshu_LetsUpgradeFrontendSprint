// Sample Data
const papers = [
    {
        university: "BBD University",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "index.pdf",
        downloadUrl: "JAVA INDEX.pdf"
    },
    {
    
        university: "AKTU",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    {
        id: 1,
        university: "AKTU",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    {
        id: 1,
        university: "AKTU",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    {
        id: 1,
        university: "AKTU",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    {
        id: 1,
        university: "AKTU",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    {
        id: 1,
        university: "AKTU",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    {
        id: 1,
        university: "AKTU",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    {
        id: 1,
        university: "AKTU",
        semester: "Semester 3",
        subject: "Mathematics III",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    {
        id: 1,
        university: "BBD University",
        semester: "Semester 3",
        subject: "Data Structure using C",
        year: "2023",
        type: "Final Paper",
        pdfUrl: "#",
        downloadUrl: "#"
    },
    // Add more papers...
];

// DOM Elements
const searchInput = document.getElementById('search');
const universityFilter = document.getElementById('university');
const semesterFilter = document.getElementById('semester');
const subjectFilter = document.getElementById('subject');
const papersGrid = document.getElementById('papers-grid');

// Render Papers
function renderPapers(papers) {
    papersGrid.innerHTML = papers.map(paper => `
        <div class="paper-card">
            <div class="card-header">
                <span class="university-badge">${paper.university}</span>
                <span class="paper-type">${paper.type}</span>
            </div>
            <div class="card-body">
                <h3 class="subject-name">${paper.subject}</h3>
                <div class="meta-info">
                    <span>${paper.semester}</span>
                    <span>${paper.year}</span>
                </div>
            </div>
            <div class="card-actions">
                <button class="action-btn preview-btn" onclick="window.open('${paper.pdfUrl}', '_blank')">
                    <i class="fas fa-eye"></i>
                    Preview
                </button>
                <a href="${paper.downloadUrl}" download class="action-btn download-btn">
                    <i class="fas fa-download"></i>
                    Download
                </a>
            </div>
        </div>
    `).join('');
}

// Filter Functionality
function filterPapers() {
    const searchTerm = searchInput.value.toLowerCase();
    const university = universityFilter.value;
    const semester = semesterFilter.value;
    const subject = subjectFilter.value;

    const filtered = papers.filter(paper => {
        const matchesSearch = paper.subject.toLowerCase().includes(searchTerm) ||
                            paper.type.toLowerCase().includes(searchTerm);
        
        return matchesSearch &&
            (!university || paper.university === university) &&
            (!semester || paper.semester === semester) &&
            (!subject || paper.subject === subject);
    });

    renderPapers(filtered);
}

// Event Listeners
searchInput.addEventListener('input', filterPapers);
universityFilter.addEventListener('change', filterPapers);
semesterFilter.addEventListener('change', filterPapers);
subjectFilter.addEventListener('change', filterPapers);

// Initial Render
renderPapers(papers);