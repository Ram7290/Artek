const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const dir = path.join(process.env.TEMP, "heroimgs");
(async () => {
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".webp"))) {
    try {
      const m = await sharp(path.join(dir, f)).metadata();
      await sharp(path.join(dir, f))
        .resize(400)
        .jpeg({ quality: 70 })
        .toFile(path.join(dir, "prev-" + f.replace(".webp", ".jpg")));
      console.log(f, m.width + "x" + m.height);
    } catch (e) {
      console.log(f, "ERR", e.message);
    }
  }
})();
