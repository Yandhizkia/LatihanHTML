const apiKey = "d3pVmkIbBO2evwVankwXqcfFKFaOaKFAp09TRUFC"; // Ganti dengan API key kamu

$(document).ready(function () {
  $("#getData").on("click", function () {
    const date = $("#date").val();

    if (!date) {
      alert("Silakan pilih tanggal terlebih dahulu.");
      return;
    }

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    $.getJSON(url, function (data) {
      $("#title").text(data.title);
      $("#dateText").text(`Tanggal: ${data.date}`);
      $("#explanation").text(data.explanation);

      const $media = $("#media");
      $media.empty();

      if (data.media_type === "image") {
        $media.append(`<img src="${data.url}" alt="${data.title}">`);
      } else if (data.media_type === "video") {
        $media.append(
          `<iframe src="${data.url}" width="100%" height="400" allowfullscreen></iframe>`
        );
      }
    }).fail(function () {
      alert("Gagal mengambil data dari NASA API.");
    });
  });
});
