// Sample Notes Data with Download Control
const studyNotes = [
    {
        university: "BBD University",
        semester: "Semester 3",
        subject: "Data Structures",
        previewUrl: "index.pdf",
        downloadUrl: "JAVA INDEX.pdf",
        showDownload: true
    },
    {
        university: "AKTU",
        semester: "Semester 4",
        subject: "Mathematics III",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false // No download button
    },
    {
        university: "BBD University",
        semester: "Semester 1",
        subject: "Engineering Physics",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 2",
        subject: "Engineering Physics",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 3",
        subject: "Data structure using c ",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 4",
        subject: "Software Engineering ",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 4",
        subject: "Database Management Systems ",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 4",
        subject: "Operating Systems ",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 4",
        subject: "Statistical And numerical Technique ",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 4",
        subject: "Industrial Sociology",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 4",
        subject: "Computer Organisation And Architechture",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 3",
        subject: "Core And Advance Java",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 3",
        subject: "Discrete Mathematics",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 3",
        subject: "Complex Analysis And Integral Transformation",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 3",
        subject: "Indian constitution",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
    {
        university: "BBD University",
        semester: "Semester 3",
        subject: "Organisation Behaviour",
        previewUrl: "#",
        downloadUrl: "#",
        showDownload: false
    },
];

// DOM Elements
const searchInput = document.getElementById('search');
const universityFilter = document.getElementById('university');
const semesterFilter = document.getElementById('semester');
const subjectFilter = document.getElementById('subject');
const notesGrid = document.getElementById('notes-grid');

// Render Notes with Conditional Buttons
function renderNotes(notes) {
    notesGrid.innerHTML = notes.map(note => {
        const downloadButton = note.showDownload ? `
            <a href="${note.downloadUrl}" class="action-btn download-btn" download>
                <i class="fas fa-download"></i>
                Download
            </a>
        ` : '';

        return `
            <div class="note-card">
                <div class="card-header">
                    <span class="university-badge">${note.university}</span>
                    <span class="semester-info">${note.semester}</span>
                </div>
                <h3 class="subject-name">${note.subject}</h3>
                <div class="card-actions ${!note.showDownload ? 'single-button' : ''}">
                    <button class="action-btn preview-btn" onclick="window.open('${note.previewUrl}')">
                        <i class="fas fa-eye"></i>
                        Preview
                    </button>
                    ${downloadButton}
                </div>
            </div>
        `;
    }).join('');
}

// Filter Functionality
function filterNotes() {
    const searchTerm = searchInput.value.toLowerCase();
    const university = universityFilter.value;
    const semester = semesterFilter.value;
    const subject = subjectFilter.value;

    const filtered = studyNotes.filter(note => {
        const matchesSearch = note.subject.toLowerCase().includes(searchTerm);
        
        return matchesSearch &&
            (!university || note.university === university) &&
            (!semester || note.semester === semester) &&
            (!subject || note.subject === subject);
    });

    renderNotes(filtered);
}

// Event Listeners
searchInput.addEventListener('input', filterNotes);
universityFilter.addEventListener('change', filterNotes);
semesterFilter.addEventListener('change', filterNotes);
subjectFilter.addEventListener('change', filterNotes);

// Initial Render
renderNotes(studyNotes);