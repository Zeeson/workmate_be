import { CourierClient } from "@trycourier/courier";

export const sendEmail = async (firstName, email, phoneNumber) => {
  const courier = CourierClient({ authorizationToken: process.env.COURIER_KEY }); // get from the Courier UI
      const { requestId } = await courier.send({
      message: {
          // template: "9X70YM2DKS4KA4PFXNSZAHK7RPSQ",
          content: {
          title: "New Project Submitted",
          body: `A new project has been submitted by {{name}}, with ${email} and ${phoneNumber}`,
          },
          
          data: {
            name: firstName,
          },

          to: {
            email: "ibrahim.saliman.zainab@gmail.com",
          },
          routing: {
          method: "single",
          channels: ["email"],
          },
      },
      })

}
