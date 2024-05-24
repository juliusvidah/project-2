document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const employeeList = document.getElementById('employeeList');
    const searchInput = document.getElementById('searchInput');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        const employees = employeeList.getElementsByTagName('li');
        Array.from(employees).forEach((employee) => {
            const name = employee.textContent.toLowerCase();
            if (name.includes(filter)) {
                employee.style.display = '';
            } else {
                employee.style.display = 'none';
            }
        });
    });

    employeeList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('selected');
        }
    });
});