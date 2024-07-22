export async function handle({ event, resolve }) {
    event.locals.user = 'Middlewre has been called'
    console.log(event.locals.user)
    return await resolve(event)
}