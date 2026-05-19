public class MacroCommand : ICommand
{
    private readonly List<ICommand> _commands;
    public MacroCommand(params ICommand[] commands) => _commands = commands.ToList();
    public void Execute() => _commands.ForEach(c => c.Execute());
    public void Undo()    => _commands.AsEnumerable().Reverse().ToList().ForEach(c => c.Undo());
}
