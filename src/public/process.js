$(document).ready(function () {
    $("#btn_Submit").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();
        var name = $("#name").val();
        var data = ({ email, name, password });
        $.ajax({
            url: "./user-create",
            data: data,
            caches: false,
            method: "POST",
            type: "POST",
            success: function (data) {
                if (data.result == 1) {
                    alert("Thêm người dùng thành công!!!");
                    console.log(data);
                }else{
                    alert(data.message);
                }
            }
        })
    })
})