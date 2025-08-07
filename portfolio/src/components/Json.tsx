export const Json = async () => {
    const username = 'LuizBuarqueDev';

    const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, {
            next: { revalidate: 3600 },
        }),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=1`, {
            next: { revalidate: 3600 },
        }),
    ]);

    const user = await userRes.json();
    const [repo] = await repoRes.json();

    const commitsRes = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
        { next: { revalidate: 3600 } }
    );
    const linkHeader = commitsRes.headers.get('Link');

    let totalCommits = 1;
    if (linkHeader) {
        const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
        if (match) totalCommits = parseInt(match[1], 10);
    } else {
        const commits = await commitsRes.json();
        totalCommits = commits.length;
    }

    // Dados separados para cada parte
    const usuario = {
        nome: user.name,
        login: user.login,
        bio: user.bio,
        seguidores: user.followers,
        seguindo: user.following,
        public_repos: user.public_repos,
        url: user.html_url,
    };

    const ultimoRepositorio = {
        nome: repo.name,
        descricao: repo.description,
        estrelas: repo.stargazers_count,
        forks: repo.forks_count,
        linguagem: repo.language,
        criado_em: repo.created_at,
        atualizado_em: repo.updated_at,
        url: repo.html_url,
        total_commits: totalCommits,
    };

    const colorirJson = (obj: any) => {
        let json = JSON.stringify(obj, null, 2);

        let escaped = json
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"([^"]+)"(?=\s*:)/g, '<span class="text-white">"$1"</span>')
            .replace(/:\s*"([^"]*)"/g, ': <span class="text-orange-300">"$1"</span>')
            .replace(/:\s*(\d+)/g, ': <span class="text-lime-300">$1</span>')
            .replace(/:\s*(true|false)/g, ': <span class="text-blue-400">$1</span>')
            .replace(/:\s*null/g, ': <span class="text-yellow-200">null</span>');

        return escaped;
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 p-4 bg-[var(--color_2)] rounded-lg text-white font-mono text-[1.1rem] max-w-full overflow-x-auto">
            <div className="flex-1 border-2 border-white rounded-lg p-4 overflow-x-auto">
                <h3>Usuário</h3>
                <pre
                    className="m-0"
                    dangerouslySetInnerHTML={{ __html: colorirJson(usuario) }}
                />
            </div>
            <div className="flex-1 border-2 border-white rounded-lg p-4 overflow-x-auto">
                <h3>Último Repositório</h3>
                <pre
                    className="m-0"
                    dangerouslySetInnerHTML={{ __html: colorirJson(ultimoRepositorio) }}
                />
            </div>
        </div>
    );
};
