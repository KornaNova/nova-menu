<?php

namespace NormanHuth\NovaMenu;

use Illuminate\Contracts\Support\Arrayable;
use JetBrains\PhpStorm\ExpectedValues;
use JsonSerializable;
use Laravel\Nova\AuthorizedToSee;

class MenuCard implements JsonSerializable
{
    use AuthorizedToSee;
    use TooltipTrait;
    use FilterTrait;

    /**
     * The menu's component.
     */
    public string $component = 'advanced-menu-card';

    /**
     * The menu card's section.
     */
    protected string $section = 'Section';

    /**
     * The menu card's content.
     */
    protected ?string $content = null;

    /**
     * The menu card's classes.
     */
    protected array $classes = [
        'filterClass' => '',
        'card' => [],
    ];

    /**
     * The menu card's styles.
     */
    protected array $styles = [];

    /**
     * The menu card type.
     */
    protected string $type;

    public function __construct(
        #[ExpectedValues(values: ['info', 'success', 'warning', 'danger'])]
        ?string $type = null
    ) {
        $types = [
            'success' => [
                'bg-green-100',
                'text-green-600',
                'dark:bg-green-400',
                'dark:text-green-900',
            ],
            'info' => [
                'bg-sky-100',
                'text-sky-600',
                'dark:bg-sky-500',
                'dark:text-sky-900',
            ],
            'danger' => [
                'bg-red-100',
                'text-red-600',
                'dark:bg-red-300',
                'dark:text-red-900',
            ],
            'warning' => [
                'bg-yellow-100',
                'text-yellow-600',
                'dark:bg-yellow-200',
                'dark:text-yellow-800',
            ],
        ];

        if (isset($types[$type])) {
            $this->addClasses(array_merge($types[$type], [
                'border',
                'p-1',
            ]));
        }
    }

    /**
     * Create a new element.
     */
    public static function make(
        #[ExpectedValues(values: ['info', 'success', 'warning', 'danger'])]
        ?string $type = null
    ): static {
        return new static($type);
    }

    /**
     * Set menu card content.
     */
    public function content(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get the evaluated view contents for the menu card.
     */
    public function view(string $view, array|Arrayable $data = [], array $mergeData = []): static
    {
        $this->content = view($view, $data, $mergeData)->render();

        return $this;
    }

    /**
     * Add Tailwind CSS rounded class to the menu card.
     */
    public function rounded(
        #[ExpectedValues(values: ['sm', 'md', 'lg'])]
        string $size = null
    ): static {
        $class = 'rounded';

        if ($size) {
            $class .= '-' . $size;
        }

        $this->addClasses($class);

        return $this;
    }

    /**
     * Use menu card as menu item.
     */
    public function asItem(): static
    {
        $this->section = 'item';

        return $this;
    }

    /**
     * Add classes to the menu card class attribute.
     */
    public function addClasses(string|array $classes): static
    {
        $this->classes['card'] = array_merge($this->classes['card'], (array) $classes);

        return $this;
    }

    /**
     * Add styles to the menu card style attribute.
     */
    public function addStyles(array $styles): static
    {
        $this->styles = array_merge($this->styles, $styles);

        return $this;
    }

    /**
     * Prepare the menu card for JSON serialization.
     *
     * @return array<string, mixed>
     */
    public function jsonSerialize(): array
    {
        return [
            'component' => $this->component,
            'section' => $this->section,
            'content' => $this->content,
            'tooltip' => $this->tooltip,
            'classes' => $this->classes,
            'styles' => $this->styles,
            'keywords' => $this->keywords,
            'filterClass' => $this->filterClass,
            'notFilterable' => $this->notFilterable,
        ];
    }
}
