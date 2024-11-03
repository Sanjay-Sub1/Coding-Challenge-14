async function fetchTickets() {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Failed to fetch tickets');
        }

        const data = await response.json();

        if (data.length === 0) {
            throw new Error('No ticket found');
        }

        data.forEach(ticket => {
            const ticketElement = document.createElement('div');
            ticketElement.innerHTML = `
                <h2>${ticket.title}</h2>
                <p>${ticket.body}</p>
                <hr>
            `;
            ticketContainer.appendChild(ticketElement);
        });
    } catch (error) {
        console.error('Error:', error);
        errorMessage.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

fetchTickets();
