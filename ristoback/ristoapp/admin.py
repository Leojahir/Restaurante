from django.contrib import admin
from .models import Usuario, Producto, Pedido, Reserva, Mesa

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'nombre', 'correo', 'rol')

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('product_id', 'nombre', 'descripcion', 'precio', 'categoria', 'imagen')

@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'user_id', 'fecha', 'estado', 'metodo_pago')

@admin.register(Reserva)
class ReservaAdmin(admin.ModelAdmin):
    list_display = ('reservation_id', 'user_id', 'fecha', 'numero_mesa', 'estado')

@admin.register(Mesa)
class MesaAdmin(admin.ModelAdmin):
    list_display = ('table_id', 'numero_mesa', 'capacidad', 'estado')
