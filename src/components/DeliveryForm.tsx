import { Container, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties } from "react";
import * as Yup from 'yup';

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const DeliverySchema = Yup.object({
    email: Yup.string().email("Please enter an valid email address").required("Please enter an email address"),
    name: Yup.string().required("Please enter a name"),
    address: Yup.string().required("Please enter your address"),
    postalcode: Yup.string().min(5, "The postal code should be 5 numbers").max(5, "The postal code should be only 5 numbers").required("Please enter the postal code"),
    city: Yup.string().required("Please enter your city"),
    phonenumber: Yup.string().required().matches(phoneRegExp, "Invalid phone number"),
})

type DeliveryValues = Yup.InferType<typeof DeliverySchema>;

function DeliveryForm() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const formik = useFormik<DeliveryValues>({
        initialValues: {
            email: '',
            name: '',
            address: '',
            postalcode: '',
            city: '',
            phonenumber: '',
        },
        validationSchema: DeliverySchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <Container sx={{
            width: isSmallScreen ? '80%' : '50%',
            marginTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <form onSubmit={formik.handleSubmit} style={rootStyle} data-cy="customer-form">
                <TextField 
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    data-cy="customer-email"
                />
                <TextField 
                    id="name"
                    type="name"
                    name="name"
                    label="Name"
                    autoComplete="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    data-cy="customer-name"
                />
                <TextField 
                    id="address"
                    type="address"
                    name="address"
                    label="Address"
                    autoComplete="street-address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.address && formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                    data-cy="customer-address"
                />
                <Container sx={{
                    padding: '0 !important',
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    gap: '1rem'
                    }}>
                    <TextField 
                        id="postalcode"
                        type="postalcode"
                        name="postalcode"
                        label="Postal code"
                        autoComplete="postal-code"
                        value={formik.values.postalcode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.postalcode && formik.errors.postalcode)}
                        helperText={formik.touched.postalcode && formik.errors.postalcode}
                        data-cy="customer-zipcode"
                        sx={{ flex: 1 }}
                    />
                    <TextField 
                        id="city"
                        type="city"
                        name="city"
                        label="City"
                        autoComplete="home city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.city && formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                        data-cy="customer-city"
                        sx={{ flex: 1 }}
                    />
                </Container>
                <TextField 
                    id="phonenumber"
                    type="phonenumber"
                    name="phonenumber"
                    label="Phone number"
                    autoComplete="tel"
                    value={formik.values.phonenumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.phonenumber && formik.errors.phonenumber)}
                    helperText={formik.touched.phonenumber && formik.errors.phonenumber}
                    data-cy="customer-phone"
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