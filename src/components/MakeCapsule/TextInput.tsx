export default function TextInput({text, setText}: {text: string, setText: (text: string) => void}) {
    return (
        <div>
            <div>
                오늘 무슨 일이 있었는지 말해주세요.
            </div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        
    );
}