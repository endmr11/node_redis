const redis = require("redis");
const client = redis.createClient({
  legacyMode: true,
});

(async () => {
  await client.connect();
  const subscriber = redis.createClient();
  const publisher = redis.createClient();
  await subscriber.connect();
  await publisher.connect();
  await subscriber.subscribe("erendemir", (message, channel) => {
    console.log(`${channel} isimli kanala ${message} mesajı geldi.`); // 'message'
  });
  await publisher.publish("erendemir", JSON.stringify("Sa"));
})();

client.on("error", (error) => {
  console.error(error);
});

// SET
client.set("user_name", "eren", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("SET:", message);
});

//GET
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("GET:", message);
});

//DEL
client.del("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("DELETE:", message);
});

//EXISTS
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("EXISTS:", message);
});

//APPEND
client.append("last_name", "demirr", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("APPEND:", message);
});

//DEL
client.del("last_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("DELETE:", message);
});
