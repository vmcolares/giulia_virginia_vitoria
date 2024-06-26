document.addEventListener("DOMContentLoaded", function() {
    fetch('/trabalho4') // Rota da sua aplicação FastAPI
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById("udp-packets-table-body");
            data.forEach(packet => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${new Date(packet.timestamp * 1000).toLocaleString()}</td>
                    <td>${packet.source}</td>
                    <td>${packet.destination}</td>
                    <td>${packet.length}</td>
                    <td>${packet.data}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});
