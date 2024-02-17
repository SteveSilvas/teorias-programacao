using System;
using System.Collections.Generic;

class Cliente
{
    public int ClienteId { get; set; }
    public string Nome { get; set; }

    public Cliente(int clienteId, string nome)
    {
        ClienteId = clienteId;
        Nome = nome;
    }
}

class Pedido
{
    public int PedidoId { get; set; }
    public decimal ValorTotal { get; set; }
    public Cliente? Cliente { get; set; } = null;

    public Pedido(int pedidoId, decimal valorTotal)
    {
        PedidoId = pedidoId;
        ValorTotal = valorTotal;
    }

    public Pedido(int pedidoId, decimal valorTotal, Cliente cliente)
        : this(pedidoId, valorTotal)
    {
        Cliente = cliente;
    }
}

class Program
{
    static void Main()
    {
        // Criando clientes
        Cliente cliente1 = new Cliente(1, "João");
        Cliente cliente2 = new Cliente(2, "Maria");

        // Criando pedidos associados aos clientes
        Pedido pedido1 = new Pedido(101, 150.0m, cliente1);
        Pedido pedido2 = new Pedido(102, 200.0m, cliente1);
        Pedido pedido3 = new Pedido(103, 300.0m, cliente2);

        // Exibindo informações dos pedidos e seus clientes associados
        Console.WriteLine(
            $"Pedido {pedido1.PedidoId}: Valor {pedido1.ValorTotal}, Cliente: {pedido1.Cliente.Nome}"
        );
        Console.WriteLine(
            $"Pedido {pedido2.PedidoId}: Valor {pedido2.ValorTotal}, Cliente: {pedido2.Cliente.Nome}"
        );
        Console.WriteLine(
            $"Pedido {pedido3.PedidoId}: Valor {pedido3.ValorTotal}, Cliente: {pedido3.Cliente.Nome}"
        );
    }
}
