from rest_framework import serializers

class MesaSerializer(serializers.Serializer):
    table_id = serializers.CharField(read_only=True)
    capacidad = serializers.IntegerField()
    estado = serializers.CharField(max_length=100)
    numero_mesa = serializers.IntegerField()
    
class UsuarioSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    direccion = serializers.CharField(max_length=200)

class ReservaSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(max_length=100)
    fecha_reserva = serializers.DateField()
    mesa = serializers.IntegerField()

class ProductoSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nombre = serializers.CharField(max_length=100)
    precio = serializers.FloatField()
    descripcion = serializers.CharField(max_length=300)
    tipo = serializers.CharField(max_length=300)
    img = serializers.CharField(max_length=300)

class PedidoSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    producto = ProductoSerializer()
    usuario = UsuarioSerializer()
    fecha_pedido = serializers.DateField()
    cantidad = serializers.IntegerField()