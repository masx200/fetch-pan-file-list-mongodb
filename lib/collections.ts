import mongoose from "mongoose";
// import schemadir from "./schemadir.js";
import schemafile from "./schemafile.js";
import opts from "./opts.js";
export const panFilecollect = mongoose.model(
    opts.collect,
    schemafile,
    opts.collect
);
panFilecollect.createIndexes().then(() => {
    console.log("索引建立成功");
});
// export const panDircollect = mongoose.model("pandir", schemadir, "pandir");
// panDircollect.createIndexes().then(() => {
//     console.log("索引建立成功");
// });
