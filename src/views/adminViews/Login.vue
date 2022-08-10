<template>
  <div class="container-fluid adminBg">
    <div class="adminInner">
      <div class="loginBox">
        <form class="justify-content-center w-100">
          <h1 class="h3 mb-4 font-weight-normal text-center">管理者登入</h1>
          <div class="mb-3">
            <label for="inputEmail" class="mb-2">電子信箱</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="請輸入您的電子信箱"
              required
              autofocus
            />
          </div>
          <div class="mb-4">
            <label for="inputPassword" class="mb-2">密碼</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="請輸入您的密碼"
              required
            />
          </div>

          <div class="text-center mt-4">
            <button class="btn btn-primary btn-block" type="submit">
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
