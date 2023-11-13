<template>
    <div>
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div class="toast-header">
          <strong class="me-auto">Toast Title</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Toast Message
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      var toastElList = [].slice.call(document.querySelectorAll('.toast'))
      var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
      })
      toastList[0].show()
    }
  }
  </script>