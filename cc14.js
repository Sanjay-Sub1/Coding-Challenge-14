async function fetchTickets() {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');
    const loadingIndicator = document.getElementById('loading-indicator');

    loadingIndicator.style.display = 'block';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Failed to fetch tickets');
        }

        const data = await response.json();

        if (data.length === 0) {
            throw new Error('No tickets found');
        }

        const fragment = document.createDocumentFragment();

        data.slice(0, 10).forEach(ticket => {
            const ticketDiv = document.createElement('div');

            const ticketId = document.createElement('p');
            ticketId.textContent = `Ticket ID: ${ticket.id}`;
            ticketDiv.appendChild(ticketId);

            const customerName = document.createElement('p');
            customerName.textContent = `Customer Name: Customer #${ticket.userId}`;
            ticketDiv.appendChild(customerName);

            const issueDescription = document.createElement('p');
            issueDescription.textContent = `Issue Description: ${ticket.title}`;
            ticketDiv.appendChild(issueDescription);

            const details = document.createElement('p');
            details.textContent = `Details: ${ticket.body}`;
            ticketDiv.appendChild(details);

            const separator = document.createElement('hr');
            ticketDiv.appendChild(separator);

            fragment.appendChild(ticketDiv);
        });

        ticketContainer.appendChild(fragment);
    } catch (error) {
        console.error('Error:', error);
        const errorText = document.createElement('p');
        errorText.textContent = error.message;
        errorText.style.color = 'red';
        errorMessage.appendChild(errorText);
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

fetchTickets();
