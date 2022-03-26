   
    //filtrar itens do card
   $(document).ready(function(){
        $('.list').click(function(){
            const value = $(this).attr('data-filter')
            if(value == 'all'){
                $('.produto').show(1000)
            }
            else{
                $('.produto').not('.'+value).hide('1000')
                $('.produto').filter('.'+value).show('1000')
            }
        })
    })
        //classe de item ativo
    $('.list').click(function(){
        $(this).addClass('item-ativo').siblings().removeClass('item-ativo')
    })