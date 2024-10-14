function toggleMenu() {
    var nav = document.querySelector('nav.responsive ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

if (window.location.pathname.includes("index.html")) {
    function fetchContacts() {
        const lines = contactsData.trim().split(/\r?\n/);
        const contactSelect = document.getElementById('contactSelect');
        const contactSelectFile = document.getElementById('contactSelectFile');
        lines.forEach(line => {
            if (line.trim()) {
                const parts = line.split(/\s+/);
                const name = parts.slice(0, -1).join(' ');
                const key = parts.pop();
                const option = new Option(name, key);
                const optionFile = new Option(name, key);
                contactSelect.add(option);
                contactSelectFile.add(optionFile);
            }
        });
    }

    fetchContacts();
}