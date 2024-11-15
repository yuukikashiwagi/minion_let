document.addEventListener("DOMContentLoaded", () => {
  var sensorBtn = document.getElementById("sensor_permission");
  sensorBtn.addEventListener("click", () => {
    if (
      window.DeviceOrientationEvent &&
      window.DeviceOrientationEvent.requestPermission
    ) {
      // 権限付与文の追加
      DeviceOrientationEvent.requestPermission()
        .then((state) => {
          if (state === "granted") {
            window.location.href = "./race.html";
          } else {
            alert("Permission not granted for DeviceOrientationEvent");
          }
        })
        .catch((err) => console.error(err));
    } else {
      alert("Permission not granted for DeviceOrientationEvent");
      window.location.href = "./race.html";
    }
  });
});
