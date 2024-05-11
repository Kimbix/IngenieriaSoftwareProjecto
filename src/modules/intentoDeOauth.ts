//esto es solo vainas del oauth que aún no se que rayos hacen lo saqué de un tutorial
/* import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { z } from 'zod';

const app = express();

const UserProfile = z.object({
  id: z.string(),
  displayName: z.string(),
  emails: z.array(z.object({ value: z.string() })),
  // Agrega aquí cualquier otro campo que quieras validar
});

passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: "http://yourwebsite.com/auth/google/callback"
  },
  function(accessToken: string, refreshToken: string, profile: any, cb: any) {
    // Valida el perfil con Zod
    const result = UserProfile.safeParse(profile);

    if (!result.success) {
      // El perfil no pasó la validación, maneja el error
      cb(result.error);
    } else {
      // El perfil pasó la validación, continúa con el flujo normal
      cb(null, result.data);
    }
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req: express.Request, res: express.Response) {
    // Usuario autenticado exitosamente, redirige a la página de inicio.
    res.redirect('/');
  });

app.listen(3000); */