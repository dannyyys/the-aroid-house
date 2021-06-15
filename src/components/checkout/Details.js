import {
  Flex,
  chakra,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

import { SmallButton } from "../buttons/SmallButton";
import { PaymentContext } from "../../context/PaymentContext";

import React, { useState, useContext, useEffect } from "react";

import { Formik, Form, Field, FormikProps, FormCon } from "formik";

const Details = () => {
  const [paymentItem, setPaymentItem] = useContext(PaymentContext);

  const addPaymentItem = (values) => {
    let lastName = values.name;
    let email = values.email;
    let address = values.address;
    let phone = values.phone;
    setPaymentItem((prevItems) => [
      ...prevItems,
      { lastName, email, address, phone },
    ]);

    console.log(paymentItem);
    console.log(lastName, email, address, phone);
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validatePhone(value) {
    const validPhoneNumber = /[8|9][0-9]{7}$/;
    let error;
    if (!value) {
      error = "Phone number is required";
    } else if (!value.match(validPhoneNumber)) {
      error = "Phone number must start with 9 or 8 and have 8 digits";
    }
    return error;
  }

  function validateAddress(value) {
    let error;
    if (!value) {
      error = "Address is required";
    }
    return error;
  }

  return (
    <Flex direction="column" width={["full"]} height="full" paddingX="5">
      <Formik
        initialValues={{ name: "", email: "", phone: "", address: "" }}
        onSubmit={(values, actions) => {
          //setTimeout(() => {

          JSON.stringify(values);

          addPaymentItem(values);

          actions.setSubmitting(false);
          //}, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel marginTop="2" htmlFor="name">
                    First name
                  </FormLabel>
                  <Input
                    {...field}
                    id="name"
                    placeholder="name"
                    //onChange={(e) => updateLastName(e.target.value)}
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel marginTop="2" htmlFor="email">
                    Email
                  </FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="email"
                    //onChange={(e) => updateEmail(e.target.value)}
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phone" validate={validatePhone}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel marginTop="2" htmlFor="phone">
                    Phone number
                  </FormLabel>
                  <Input
                    {...field}
                    id="phone"
                    placeholder="phone"
                    //onChange={(e) => updatePhone(e.target.value)}
                  />
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="address" validate={validateAddress}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel marginTop="2" htmlFor="address">
                    Address
                  </FormLabel>
                  <Input
                    {...field}
                    id="address"
                    placeholder="address"
                    //onChange={(e) => updateAddress(e.target.value)}
                  />
                  <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              //isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
            <SmallButton
              // onClick={() => {
              //   props.addPaymentItem();

              // }}
              //isLoading={props.isSubmitting}
              type="submit"
              name={"Next"}
            />
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
export default Details;
