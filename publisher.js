const redis = require("redis");
const publisher = redis.createClient();

(async () => {
  await publisher.connect();

  setInterval(() => {
    publishInterval();
  }, 1000);
})();

async function publishInterval() {
  await publisher.publish(
    "erendemir",
    "Bu mesaj pusblisher.js tarafından gönderiliyorr."
  );
}

publisher.on("error", (error) => {
  console.error(error);
});
