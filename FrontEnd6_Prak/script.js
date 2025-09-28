const apiKey = "d3pVmkIbBO2evwVankwXqcfFKFaOaKFAp09TRUFC"; // Ganti dengan API key kamu jika punya
const getDataBtn = document.getElementById("getData");

getDataBtn.addEventListener("click", () => {
  const date = document.getElementById("date").value;

  if (!date) {
    alert("Silakan pilih tanggal terlebih dahulu.");
    return;
  }

  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("dateText").textContent = `Tanggal: ${data.date}`;
      document.getElementById("explanation").textContent = data.explanation;

      const mediaContainer = document.getElementById("media");
      mediaContainer.innerHTML = "";

      if (data.media_type === "image") {
        const img = document.createElement("img");
        img.src = data.url;
        img.alt = data.title;
        mediaContainer.appendChild(img);
      } else if (data.media_type === "video") {
        const iframe = document.createElement("iframe");
        iframe.src = data.url;
        iframe.width = "100%";
        iframe.height = "400";
        iframe.allowFullscreen = true;
        mediaContainer.appendChild(iframe);
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      alert("Gagal mengambil data dari NASA API.");
    });
});
