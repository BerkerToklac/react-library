export const oktaConfig = {
  clientId: "0oador11jsY5Z55xr5d7",
  issuer: "https://dev-29500056.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
