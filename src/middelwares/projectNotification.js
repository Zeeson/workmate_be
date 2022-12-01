import { CourierClient } from "@trycourier/courier";

export const sendEmail = async (firstName, email, phoneNumber) => {
  const courier = CourierClient({ authorizationToken: process.env.COURIER_KEY }); // get from the Courier UI
      const { requestId } = await courier.send({
      message: {
          // template: "9X70YM2DKS4KA4PFXNSZAHK7RPSQ",
          to: {
          data: {
            name: firstName,
          },
            email: "ibrahim.saliman.zainab@gmail.com",
          },
          content: {
          title: "New Project Submitted",
          body: `A new project has been submitted by {{name}}, with ${email} and ${phoneNumber}`,
          },
          routing: {
          method: "single",
          channels: ["email"],
          },
      },
      })

}






//   export const courier = CourierClient(
//         { authorizationToken: "pk_prod_BB03GFBSA2M834H36KQ5B1SWW9H9"});
      
//       const { requestId } = await courier.send({
//         message: {
//           content: {
//             title: "Welcome to Courier!",
//             body: "Want to hear a joke? {{joke}}"
//           },
//           data: {
//             joke: "Why was the JavaScript developer sad? Because they didn't Node how to Express themselves"
//           },
//           to: {
//             email: "olabrazanislam@gmail.com"
//           }
//         }
//    });


// export const courier = CourierClient({ authorizationToken: process.env.COURIER_KEY }); // get from the Courier UI

// // Example: send a basic message to an email recipient
// const { requestId } = await courier.send({
//   message: {
//     // template: "<TEMPLATE_OR_EVENT_ID>",
//     to: {
//       data: {
//         name: "Marty",
//       },
//       email: "olabrazanislam@gmail.com",
//     },
//     content: {
//       title: "Back to the Future",
//       body: "Oh my {{name}}, we need 1.21 Gigawatts!",
//     },
//     routing: {
//       method: "single",
//       channels: ["email"],
//     },
//   },
// });