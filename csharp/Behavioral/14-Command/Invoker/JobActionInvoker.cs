public class JobActionInvoker
{
    private readonly Stack<ICommand> _history = new();
    private readonly Queue<ICommand> _queue   = new();

    public void Enqueue(ICommand command) => _queue.Enqueue(command);

    public void ExecuteNext()
    {
        if (_queue.Count == 0) { Console.WriteLine("  Queue is empty."); return; }
        var command = _queue.Dequeue();
        command.Execute();
        _history.Push(command);
    }

    public void ExecuteAll()
    {
        while (_queue.Count > 0) ExecuteNext();
    }

    public void Undo()
    {
        if (_history.Count == 0) { Console.WriteLine("  Nothing to undo."); return; }
        _history.Pop().Undo();
    }
}
