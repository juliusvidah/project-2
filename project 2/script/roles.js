document.addEventListener('DOMContentLoaded', function() {
    const roles = [
        {
            title: 'Solution Sales Specialist',
            description: 'Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company\'s sales goals.',
            tags: ['Marketing', 'Product', 'Engineering', 'Design'],
            manager: 'James Campion',
            imageUrl: '/home/ephysokka/Desktop/project 2/img/arole.png'
        },
        {
            title: 'Software Engineer',
            description: 'Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company\'s sales goals.',
            tags: ['Engineering', 'Product', 'Engineerin', 'Design'],
            manager: 'Sara Brown',
            imageUrl: '/home/ephysokka/Desktop/project 2/img/arole.png'
        },
        {
            title: 'Software Engineer',
            description: 'Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company\'s sales goals.',
            tags: ['Engineering', 'Product', 'Engineerin', 'Design'],
            manager: 'Sara Brown',
            imageUrl: '/home/ephysokka/Desktop/project 2/img/arole.png'
        },
        {
            title: 'Software Engineer',
            description: 'Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company\'s sales goals.',
            tags: ['Engineering', 'Product', 'Engineerin', 'Design'],
            manager: 'Sara Brown',
            imageUrl: '/home/ephysokka/Desktop/project 2/img/arole.png'
        }
        
    ];

    function displayRoles(filter = 'all') {
        const rolesList = document.getElementById('rolesList');
        rolesList.innerHTML = '';
        const filteredRoles = roles.filter(role => filter === 'all' || role.tags.includes(filter));
        filteredRoles.forEach(role => {
            const roleCard = document.createElement('div');
            roleCard.className = 'role-card';
            roleCard.innerHTML = `
                <h3>${role.title}</h3>
                <p>${role.description}</p>
                <div class="tags">${role.tags.map(tag => `<span>${tag}</span>`).join(' ')}</div>
                <div class="manager">
                    <img src="${role.imageUrl}" alt="${role.manager}">
                    <span>${role.manager}</span>
                </div>
            `;
            rolesList.appendChild(roleCard);
        });
    }

    function filterRoles(filter) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.querySelector(`.tab[onclick="filterRoles('${filter}')"]`).classList.add('active');
        displayRoles(filter);
    }

    displayRoles();
})


