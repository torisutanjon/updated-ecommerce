import multer from "multer";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  createLocalImageDir: () => multer(),
  uploadImageToFirebase: async (files) => {
    try {
      //initialize firebase config
      const firebaseConfig = {
        apiKey: "AIzaSyBX39DhP5vRsRjpOp-P1RCg-bhOzr40uPU",
        authDomain: "updated-e-commerce-project.firebaseapp.com",
        projectId: "updated-e-commerce-project",
        storageBucket: "updated-e-commerce-project.appspot.com",
        messagingSenderId: "973391226953",
        appId: "1:973391226953:web:4d611f791315d32ea2f798",
        measurementId: "G-BXMYPL4VWX",
        storageBucket: "gs://updated-e-commerce-project.appspot.com/",
      };

      //initialize firebase
      const app = initializeApp(firebaseConfig);

      //initialize cloud storage and get refenrece
      const storage = getStorage(app);

      const promises = files.map((file) => {
        //create a storage reference
        const storageRef = ref(storage, `products/${file.originalname}`);

        const metaData = {
          name: file.originalname,
          size: file.size,
          contentType: file.mimetype,
        };

        //create a new promise to wait for the the download urls
        return new Promise((resolve, reject) => {
          //store the image into the firebase
          uploadBytes(storageRef, file.buffer, metaData).then(
            (snapshot, error) => {
              //if there is no error and a snapshot
              if (!error && snapshot) {
                //get the download url
                getDownloadURL(storageRef).then((url) => {
                  //resolve the url
                  resolve(url);
                });
              } else {
                console.log("Error in upload the file");
                reject(error);
              }
            }
          );
        });
      });

      //wait all download urls
      const productUrls = await Promise.all(promises);
      //return it to the controller
      return productUrls;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  savingCode: () => {
    // import admin from "firebase-admin";
    // import serviceAccount from "../keys/updated-e-commerce-app-8f25e0b85b7a.json" assert { type: "json" };
    // import { getStorage, uploadBytes } from "firebase/storage";
    //firebase configs
    // admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount),
    //   storageBucket: "gs://updated-e-commerce-app.appspot.com",
    // });
    // const bucket = admin.storage().bucket();
    // function: () => {
    //   const promises = files.map(async (file) => {
    //     const timestamp = new Date().getTime();
    //     const fileName = `products/${timestamp}-${file.originalname}`;
    //     const blob = bucket.file(fileName);
    //     const blobStream = blob.createWriteStream({
    //       metadata: {
    //         contentType: file.mimetype,
    //       },
    //     });
    //     return new Promise((resolve, reject) => {
    //       blobStream.on("finish", async () => {
    //         try {
    //           const url = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    //           resolve(url);
    //         } catch (error) {
    //           console.error(error);
    //           reject(error);
    //         }
    //       });
    //       blobStream.end(file.buffer);
    //     });
    //   });
    //   const imageUrls = await Promise.all(promises);
    //   return imageUrls;
    // }
  },
};
