<template>
    <form method="POST">
      <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" v-model="email" required autocomplete="email" autofocus class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" class="form-control" name="password" required autocomplete="current-password"  id="password" placeholder="Password">
      </div>
      <div class="account-dialog-actions">
          <button type="submit" class="btn btn-primary">Giriş Yap</button>
          <a class="account-dialog-link" href="/register">Create a new account</a>
      </div>
  </form>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
