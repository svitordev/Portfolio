# memory-bank/patterns.md — Padrões de Código

> Padrões identificados no código. Atualizada em 2026-09-21.

## Padrões Identificados

### 1. Componentes com React.memo
`ProjectBox` e `Projects` usam `React.memo` para prevenir re-renders desnecessários.

```tsx
const ProjectBoxComponent: React.FC<ProjectProps> = ({ item }) => {
  // ...
};
const ProjectBox = React.memo(ProjectBoxComponent);
```

### 2. i18n com TFunction
Dados dinâmicos recebem `TFunction` como parâmetro para tradução.

```tsx
export const getProjectsData = (t: TFunction): ProjectsProp[] => [
  { title: t("projects.acs.title"), ... }
];
```

### 3. Theme Context com Error
Contexto valida se existe antes de usar.

```tsx
const context = useContext(ThemeContext);
if (!context) {
  throw new Error("ThemeContext must be used within a ThemeProvider");
}
```

### 4. Intersection Observer + GSAP
Hooks customizados disparam animações ao scroll.

```tsx
useIntersectionObserver({
  elements: ref,
  animate: AnimationLeft,
  reset: ResetAnimationLeft,
});
```

### 5. Form com react-hook-form + SubmitHandler
Tipagem forte no formulário.

```tsx
type FormValues = { name: string; email: string; message: string; };
const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
const sendEmail: SubmitHandler<FormValues> = async (data) => { ... };
```

### 6. Componentes index.tsx
Cada componente tem `index.tsx` como entry point.

### 7. Interfaces com Props
Props tipadas explicitamente em componentes.

```tsx
interface LinkProps { href: string; children: React.ReactNode; isActive: boolean; }
function LinkMenu({ href, children, isActive }: LinkProps) { ... }
```

### 8. Refs sem type param (nível básico)
Refs usam `useRef(null)` sem type parameter explícito.

```tsx
const boxRef = useRef(null); // deveria ser useRef<HTMLElement | null>(null)
```

### 9. Conditional rendering com ternários
Temas alternados com ternários simples.

```tsx
{theme === "dark" ? <img src={homeDark} /> : <img src={homeLight} />}
```

### 10. GSAP marquee com repeat: -1
Marquee animado com background-position.

```tsx
useEffect(() => {
  gsap.to(boxRef.current, {
    backgroundPosition: "0% 50%",
    ease: "linear",
    repeat: -1,
  });
}, []);
```
