import * as yup from 'yup';
export const SignupSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name cannot exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "First name can only contain letters")
    .test(
      "no-spaces",
      "First name cannot contain spaces",
      (value) => !value || !value.includes(" ")
    ),

  lastname: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name cannot exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters")
    .test(
      "no-spaces",
      "Last name cannot contain spaces",
      (value) => !value || !value.includes(" ")
    ),

  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Enter a valid email address"
    ),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password cannot exceed 10 characters")
    .required("Password is required")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !value || !value.includes(" ")
    )
    .matches(
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      "Password must contain at least one special character"
    )
    .matches(
      /\d/,
      "Password must contain at least one digit"
    ),

  terms_and_condition: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Enter a valid email address"
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password cannot exceed 10 characters")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !value || !value.includes(" ")
    ),
});

export const AccountSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name cannot exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "First name can only contain letters"),

  lastname: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name cannot exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters"),

  displayName: yup
    .string()
    .required("Display name is required")
    .min(2, "Display name must be at least 2 characters")
    .max(30, "Display name cannot exceed 30 characters"),

  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Enter a valid email address"
    ),

  currentPassword: yup.string(),

  newPassword: yup
    .string()
    .test(
      "password-rules",
      "Password must be 6-10 chars, contain 1 digit and 1 special character",
      (value) => {
        if (!value) return true;

        return (
          value.length >= 6 &&
          value.length <= 10 &&
          /\d/.test(value) &&
          /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)
        );
      }
    ),

  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("newPassword"), null],
      "Passwords do not match"
    ),
});

export const CheckoutSchema = yup.object({firstname: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name cannot exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "First name can only contain letters")
    .test(
      "no-spaces",
      "First name cannot contain spaces",
      (value) => !value || !value.includes(" ")
    ),

  lastname: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name cannot exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters")
    .test(
      "no-spaces",
      "Last name cannot contain spaces",
      (value) => !value || !value.includes(" ")
    ),

  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Enter a valid email address"
    ),
  
  

})
