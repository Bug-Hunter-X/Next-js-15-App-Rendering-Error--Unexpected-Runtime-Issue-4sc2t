```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      {/* Added a conditional rendering to check for an environment variable.  Replace 'MY_ENV_VAR' with your specific environment check. */}
      {process.env.MY_ENV_VAR && <p>Environment variable detected!</p>}
    </div>
  );
}
```