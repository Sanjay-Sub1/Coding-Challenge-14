async function fetchTickets() {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Failed to fetch tickets. Please try again later.');
        }

        const data = await response.json();

        if (data.length === 0) {
            throw new Error('No tickets found.');
        }

        let ticketsHTML = '';
        data.forEach(ticket => {
            ticketsHTML += `
                <div>
                    <p><strong>Ticket ID:</strong> ${ticket.id}</p>
                    <p><strong>Customer Name:</strong> Customer #${ticket.userId}</p>
                    <p><strong>Issue Description:</strong> ${ticket.title}</p>
                    <p><strong>Details:</strong> ${ticket.body}</p>
                    <hr>
                </div>
            `;
        });

        ticketContainer.insertAdjacentHTML('beforeend', ticketsHTML);
    } catch (error) {
        console.error('Error:', error);
        errorMessage.insertAdjacentHTML('beforeend', `<p style="color: red;">${error.message}</p>`);
    }
}

fetchTickets();
