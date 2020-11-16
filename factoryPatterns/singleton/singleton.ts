class Singleton {
    private static instance: Singleton;
    private params: string;
    private constructor(params: string) {
        this.params = params;
    }
    public static getInstance(params: string): Singleton {
        return Singleton.instance ?? (Singleton.instance = new Singleton(params));
    }
    public log() {
        console.log(this.params);
    }
}

function clientCode() {
    const s1 = Singleton.getInstance('hi');
    const s2 = Singleton.getInstance('mahai');
    console.log(s1 == s2);
    s2.log(); // return s1.log() || s1.params
}
clientCode();


