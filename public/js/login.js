
function login(obj) {
  var $form = $(obj).parent()
  var $id = $form.children('.id')
  var $pwd = $form.children('.pwd')
  const user = { id: $id.val(), pwd: $pwd.val() }

  $.ajax({
    url: `http://localhost:3008/api/login`,
    processData: false,
    contentType: "application/json",
    data: JSON.stringify({ user }),
    type: "POST",
    success: function (result) {
      if (result.token) {
        location.href = '/'
      } else {
        alert('다시 입력해주세요!')
      }
    },
    error: (err) => {
      console.log(err);
      alert('오류가 발생했습니다.')
    }
  })
}