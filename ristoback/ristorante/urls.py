from django.urls import path
from ristoapp.views import MesaList, MesaDetail, UsuarioList, UsuarioDetail, ProductoList, ProductoDetail, PedidoList, PedidoDetail, ReservaList, ReservaDetail

urlpatterns = [
    path('mesas/', MesaList.as_view(), name='mesas'),
    path('mesas/<str:table_id>', MesaDetail.as_view(), name='mesa'),

    path('usuarios/', UsuarioList.as_view(), name='usuarios'),
    path('usuarios/<str:uid>', UsuarioDetail.as_view(), name='usuario'),

    path('productos/', ProductoList.as_view(), name='productos'),
    path('productos/<str:product_id>', ProductoDetail.as_view(), name='producto'),

    path('pedidos/', PedidoList.as_view(), name='pedidos'),
    path('pedidos/<str:order_id>', PedidoDetail.as_view(), name='pedido'),

    path('reservas/', ReservaList.as_view(), name='reservas'),
    path('reservas/<str:reservation_id>', ReservaDetail.as_view(), name='reserva'),
]
