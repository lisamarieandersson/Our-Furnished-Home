import { Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties } from "react";
import * as Yup from 'yup';

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const DeliverySchema = Yup.object({
    email: Yup.string().email("Please enter an valid email address").required("Please enter an email address"),
    name: Yup.string().required("Please enter a name"),
    address: Yup.string().required("Please enter your address"),
    postalCode: Yup.string().min(5, "The postal code should be 5 numbers").max(5, "The postal code should be only 5 numbers"),
    city: Yup.string().required("Please enter your city"),
    phoneNumber: Yup.string().required().matches(phoneRegExp, "Invalid phone number"),
})

type DeliveryValues = Yup.InferType<typeof DeliverySchema>;

function DeliveryForm() {
    const formik = useFormik<DeliveryValues>({
        initialValues: {
            email: '',
            name: '',
            address: '',
            postalCode: '',
            city: '',
            phoneNumber: '',
        },
        validationSchema: DeliverySchema,
        onSubmit: (values) => {

        }
    });

    return (
        <Container sx={{
            marginTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
        }}>
        <form onSubmit={formik.handleSubmit} style={rootStyle}>
            <TextField 
                id="email"
                type="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField 
                id="name"
                type="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField 
                id="address"
                type="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
            />
        </form>
        </Container>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
}

export default DeliveryForm;