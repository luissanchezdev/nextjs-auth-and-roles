import CardWrapper from "./card-wrapper"

function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Ingresa tus datos"
      backButtonLabel="¿No tienes una cuenta?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  )
}

export default LoginForm