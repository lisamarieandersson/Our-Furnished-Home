import { Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties } from "react";
import * as Yup from "yup";

const ProductSchema = Yup.object({
  title: Yup.string().required("Please enter the title for the product"),
  price: Yup.number().required("Please enter the price for the product"),
  description: Yup.string().required(
    "Please enter the description for the product"
  ),
  brand: Yup.string().required("Please enter the brand name for the product"),
  imageurl: Yup.string().required(
    "Please enter the url for the products image"
  ),
});

export type ProductValues = Yup.InferType<typeof ProductSchema>;

function AddProductForm() {
  const formik = useFormik<ProductValues>({
    initialValues: {
      title: "",
      price: 0,
      description: "",
      brand: "",
      imageurl: "",
    },
    validationSchema: ProductSchema,
    onSubmit: () => {
      console.log("New product added");
    },
  });

  return (
    <Container>
      <Container>
        <form
          onSubmit={formik.handleSubmit}
          style={rootStyle}
          data-cy="product-form">
          <TextField
            id="title"
            type="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.title && formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            inputProps={{ "data-cy": "product-title" }}
            FormHelperTextProps={{ "data-cy": "product-title-error" } as any}
          />
          <TextField
            id="price"
            type="price"
            name="price"
            label="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.price && formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            inputProps={{ "data-cy": "product-price" }}
            FormHelperTextProps={{ "data-cy": "product-price-error" } as any}
          />
          <TextField
            id="description"
            type="description"
            name="description"
            label="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.touched.description && formik.errors.description
            )}
            helperText={formik.touched.description && formik.errors.description}
            inputProps={{ "data-cy": "product-description" }}
            FormHelperTextProps={
              { "data-cy": "product-description-error" } as any
            }
          />
          <TextField
            id="brand"
            type="brand"
            name="brand"
            label="brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.brand && formik.errors.brand)}
            helperText={formik.touched.brand && formik.errors.brand}
            inputProps={{ "data-cy": "product-brand" }}
            FormHelperTextProps={{ "data-cy": "product-brand-error" } as any}
          />
          <TextField
            id="imageurl"
            type="imageurl"
            name="imageurl"
            label="imageurl"
            value={formik.values.imageurl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.imageurl && formik.errors.imageurl)}
            helperText={formik.touched.imageurl && formik.errors.imageurl}
            inputProps={{ "data-cy": "product-imageurl" }}
            FormHelperTextProps={{ "data-cy": "product-imageurl-error" } as any}
          />
        </form>
      </Container>
    </Container>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default AddProductForm;
