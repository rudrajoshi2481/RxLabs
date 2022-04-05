import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { firestore } from "~/utils/fire.server";

export const loader: LoaderFunction = async () => {
  const collectionUser = firestore.collection("users");

  let res = await collectionUser
    .doc()
    .set({ first: "Jhson", last: "Doe", email: "rudra@gmial.com" });

  return { msg: "saved data", res };
};

function Index() {
  const post = useLoaderData();

  return (
    <Box height={"100vh"} display={"flex"} justifyContent="center" alignItems={"center"}>
      <VStack>
      <Heading style={{fontSize:"5em"}}>Health</Heading>
      <Heading style={{fontSize:"5em"}}>equity</Heading>
      <Heading style={{fontSize:"5em"}}>always</Heading>
      </VStack>
      {/* {JSON.stringify(post)} */}
    </Box>
  );
}

export default Index;
