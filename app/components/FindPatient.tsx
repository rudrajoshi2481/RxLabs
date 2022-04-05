import {
  Box,
  Button,
  FormLabel,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { ActionFunction, Form, useActionData } from "remix";
import { fireAuth, firestore } from "~/utils/fire.server";
import { LoginContext } from "~/context/loginDataContext";

export const action: ActionFunction = async ({ request }: any) => {
  const form = await request.formData();
  let formAction = form.get("_action");
  let email = form.get("email");
  let docEmail = form.get("docEmail");
  console.log(email);
  console.log("CREATE PAT 01");
  const col = firestore.collection("rxpat");
  const labCol = firestore.collection("rxLabsUsers");
  let msg;
  switch (formAction) {
    case "createPat":
      console.log("CREATE PAT");

      col
        .get()
        .then((snap) => {
          snap.forEach((m) => {
            if (m.data().email === email) {
              // msg = { status: true, login:true ,data:m.data()};

              console.log(m.data(), "CREATE PAT 01");

              labCol.get().then((snapLabs) => {
                snapLabs.forEach((sl) => {
                  if (sl.data().email === docEmail) {
                    // add list of patat
                    let listOfPat = sl.data().patList;
                    let oldList = listOfPat.push(email);
                    console.log(sl.data(), "DOC DATA");
                    col
                      .doc()
                      .set({ oldList, ...sl.data() })
                      .then((res) => {
                        console.log("Saved in the database");
                      })
                      .catch((err) => {
                        console.log(err, "ERROR DURING SAVING IN DATABASE ");
                      });
                  }
                });
              });
            }
          });
        })
        .catch((err) => {
          msg = { status: true, login: false, data: err };
        });
      break;
  }
  console.log(msg);

  return msg;
};

const FindSavedPat = () => {
  return (
    <Box
      pt="3"
      border={"3px"}
      style={{ width: "30vw", minHeight: "40vh" }}
      p="3"
      mt="3"
      w="60"
    >
      <FormLabel>Patient Id</FormLabel>
      <Input mb="1" my="1" type="number" placeholder="patient id" />

      <FormLabel>Patient Name</FormLabel>
      <Input my="1" mb="1" type="number" placeholder="Name" />
      <FormLabel>Patient PhoneNumber</FormLabel>
      <Input mb="1" my="1" type="number" placeholder="Phone Number" />

      <Button my="3">Search</Button>
    </Box>
  );
};

const CreateNewPatient = () => {
  const [e, setE] = useState("");
  const [d, setD] = useContext(LoginContext);

  return (
    <Box
      pt="3"
      border={"3px"}
      style={{ width: "30vw", minHeight: "40vh" }}
      p="3"
      mt="3"
      w="60"
    >
      <Form method="post">
        <FormLabel>Patient Email Id</FormLabel>
        <Input
          mb="1"
          name="email"
          type="email"
          my="1"
          onChange={(e) => setE(e.target.value)}
          value={e}
          placeholder="patient Email"
        />
        <Input value={d.email} name="docEmail" />
        <Button
          m="3"
          name="_action"
          value={"createPat"}
          type="submit"
          colorScheme={"green"}
        >
          create Patient
        </Button>
      </Form>
    </Box>
  );
};

const GetAllPatient = () => {
  return <Text>Get all Patient</Text>;
};

function FindPatient() {
  const ActionData = useActionData();
  useEffect(() => {
    console.log(ActionData);

    if (ActionData) {
      // setD(ActionData.data)
    }
  }, [ActionData]);

  return (
    <Box style={{ width: "60vw" }}>
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Create New Patient</Tab>
          <Tab>Get all Patient</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FindSavedPat />
          </TabPanel>
          <TabPanel>
            <CreateNewPatient />
          </TabPanel>
          <TabPanel>
            <GetAllPatient />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

{
  /* <Box style={{ width: "60vw" }}>
<Tabs>
  <TabList>
    <Tab>Login</Tab>
    <Tab>Create New User</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <LoginUser />
    </TabPanel>
    <TabPanel>
      <CreateNewUser />
    </TabPanel>
  </TabPanels>
</Tabs>
</Box> */
}

export default FindPatient;
