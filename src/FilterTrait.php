<?php

namespace NormanHuth\NovaMenu;

trait FilterTrait
{
    /**
     * Additional filter keywords.
     *
     */
    protected array $keywords = [];

    /**
     * Class using to filter menu element.
     *
     */
    protected string $filterClass = 'hidden';

    /**
     * Specify that the element should not be filterable.
     *
     */
    protected bool $notFilterable = false;

    /**
     * Specify that the element should be hidden from the index view.
     *
     * @param  (callable():(bool))|bool  $callback
     * @return \NormanHuth\NovaMenu\FilterTrait
     */
    public function notFilterable(callable|bool $callback = true): static
    {
        $this->notFilterable = is_callable($callback) ? function () use ($callback) {
            return ! call_user_func_array($callback, func_get_args());
        } : $callback;

        return $this;
    }

    /**
     * Add Keywords to element.
     *
     *
     * @return \NormanHuth\NovaMenu\FilterTrait
     */
    public function addKeywords(array $keywords): static
    {
        $keywords = array_map('strtolower', $keywords);

        $this->keywords = array_merge($this->keywords, $keywords);

        return $this;
    }

    /**
     * Set class wich using to filter menu element.
     *
     *
     * @return \NormanHuth\NovaMenu\FilterTrait
     */
    public function setFilterClass(string $class): static
    {
        $this->filterClass = $class;

        return $this;
    }
}
